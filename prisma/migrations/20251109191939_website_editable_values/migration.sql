/*
  Warnings:

  - You are about to drop the column `pagesVisitied` on the `SiteVisit` table. All the data in the column will be lost.
  - Added the required column `imageShowIndex` to the `Painting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Painting" ADD COLUMN     "headerImages" TEXT[],
ADD COLUMN     "imageShowIndex" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SiteVisit" DROP COLUMN "pagesVisitied",
ADD COLUMN     "pagesVisited" TEXT[];

-- CreateTable
CREATE TABLE "AppStyle" (
    "id" TEXT NOT NULL,
    "buttonColor" TEXT NOT NULL,
    "accentColor" TEXT NOT NULL,
    "buttonHoverColor" TEXT NOT NULL,
    "textColorMain" TEXT NOT NULL,
    "textHoverColor" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AppData" (
    "id" TEXT NOT NULL,
    "mainEmail" TEXT NOT NULL,
    "socialFacebook" TEXT NOT NULL,
    "socialTwitter" TEXT NOT NULL,
    "socialInstagram" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AboutPageText" (
    "id" TEXT NOT NULL,
    "into" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "FrontPageText" (
    "id" TEXT NOT NULL,
    "intro" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortParagraph" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AppStyle_id_key" ON "AppStyle"("id");

-- CreateIndex
CREATE UNIQUE INDEX "AppData_id_key" ON "AppData"("id");

-- CreateIndex
CREATE UNIQUE INDEX "AboutPageText_id_key" ON "AboutPageText"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FrontPageText_id_key" ON "FrontPageText"("id");
