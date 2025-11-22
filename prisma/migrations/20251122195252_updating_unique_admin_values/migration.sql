/*
  Warnings:

  - You are about to drop the column `into` on the `AboutPageText` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `desc` to the `AboutPageText` table without a default value. This is not possible if the table is not empty.
  - Added the required column `intro` to the `AboutPageText` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AboutPageText" DROP COLUMN "into",
ADD COLUMN     "desc" TEXT NOT NULL,
ADD COLUMN     "intro" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_password_key" ON "Admin"("password");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");
