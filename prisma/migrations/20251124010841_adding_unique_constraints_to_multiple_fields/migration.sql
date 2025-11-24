/*
  Warnings:

  - A unique constraint covering the columns `[username,email]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Admin_email_key";

-- DropIndex
DROP INDEX "Admin_password_key";

-- DropIndex
DROP INDEX "Admin_username_key";

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_email_key" ON "Admin"("username", "email");
