/*
  Warnings:

  - Added the required column `topic` to the `topic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "topic" ADD COLUMN     "topic" TEXT NOT NULL;
