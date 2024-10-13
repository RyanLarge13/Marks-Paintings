-- CreateTable
CREATE TABLE "Paintings" (
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
CREATE TABLE "Frames" (
    "id" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "thickness" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Paintings_id_key" ON "Paintings"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Paintings_name_key" ON "Paintings"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Frames_id_key" ON "Frames"("id");
