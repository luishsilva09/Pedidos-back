/*
  Warnings:

  - The primary key for the `PronductOnOrder` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "PronductOnOrder" DROP CONSTRAINT "PronductOnOrder_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "PronductOnOrder_pkey" PRIMARY KEY ("id");
