/*
  Warnings:

  - You are about to drop the `Frames` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Paintings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Frames";

-- DropTable
DROP TABLE "Paintings";

-- CreateTable
CREATE TABLE "Painting" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "salePrice" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "onSale" BOOLEAN NOT NULL DEFAULT false,
    "listedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "listedTill" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Frame" (
    "id" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "thickness" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordExpires" TIMESTAMP(3) NOT NULL,
    "firstTimeLogin" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "PaintingVisit" (
    "id" TEXT NOT NULL,
    "paintingId" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "where" TEXT
);

-- CreateTable
CREATE TABLE "SiteVisit" (
    "id" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "where" TEXT,
    "endTime" TIMESTAMP(3),
    "pagesVisitied" TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "Painting_id_key" ON "Painting"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Painting_name_key" ON "Painting"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Frame_id_key" ON "Frame"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_id_key" ON "Admin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PaintingVisit_id_key" ON "PaintingVisit"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SiteVisit_id_key" ON "SiteVisit"("id");

-- AddForeignKey
ALTER TABLE "PaintingVisit" ADD CONSTRAINT "PaintingVisit_paintingId_fkey" FOREIGN KEY ("paintingId") REFERENCES "Painting"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
