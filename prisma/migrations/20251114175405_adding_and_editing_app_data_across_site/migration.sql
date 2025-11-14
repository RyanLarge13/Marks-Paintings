/*
  Warnings:

  - You are about to drop the column `into` on the `AboutPageText` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AboutPageText" DROP COLUMN "into",
ADD COLUMN     "desc" TEXT NOT NULL DEFAULT 'Hello',
ADD COLUMN     "intro" TEXT NOT NULL DEFAULT 'Hello';

-- AlterTable
ALTER TABLE "AppData" ALTER COLUMN "mainEmail" SET DEFAULT 'Hello',
ALTER COLUMN "socialFacebook" SET DEFAULT 'Hello',
ALTER COLUMN "socialTwitter" SET DEFAULT 'Hello',
ALTER COLUMN "socialInstagram" SET DEFAULT 'Hello';

-- AlterTable
ALTER TABLE "AppStyle" ALTER COLUMN "buttonColor" SET DEFAULT '#c2410c',
ALTER COLUMN "accentColor" SET DEFAULT '#fdba74',
ALTER COLUMN "buttonHoverColor" SET DEFAULT '#000',
ALTER COLUMN "textColorMain" SET DEFAULT '#000',
ALTER COLUMN "textHoverColor" SET DEFAULT '#fdba74';

-- AlterTable
ALTER TABLE "FrontPageText" ALTER COLUMN "intro" SET DEFAULT 'Hello',
ALTER COLUMN "title" SET DEFAULT 'Hello',
ALTER COLUMN "shortParagraph" SET DEFAULT 'Hello';
