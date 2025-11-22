// app/admin/login/page.tsx

import { cookies } from "next/headers";
import prisma from "../../utils/prismaInstance";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Admin Login",
};

const AdminLogin = async () => {
  // Server action for handling form submit
  const handleLogin = async (formData: FormData): Promise<void> => {
    "use server";
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";
    const username = formData.get("username")?.toString() || "";

    // We will attempt to fetch admin by checking unique values
    // when querying. If admin is returned we know all values match
    const admin = await prisma.admin.findUnique({
      where: { email, password, username },
    });

    if (!admin) {
      // Handle incorrect login attemp
      return;
    }

    const passwordExpiration = new Date(admin.passwordExpires);

    if (passwordExpiration < new Date()) {
      // Handle change password
      return;
    }

    cookies().set({
      name: "user",
      value: JSON.stringify(admin),
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    redirect("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        action={handleLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="username"
            name="username"
            required
            className="mt-1 block w-full rounded border-gray-300 border shadow-sm p-2"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded border-gray-300 border shadow-sm p-2"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="mt-1 block w-full rounded border-gray-300 border shadow-sm p-2"
          />
        </div>
        <button
          type="submit"
          className="px-10 py-4 bg-orange-700 text-white font-semibold rounded-full shadow-lg hover:bg-black transition-all w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
