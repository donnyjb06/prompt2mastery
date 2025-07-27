/*
  Warnings:

  - Added the required column `language` to the `topic` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Language" AS ENUM ('javascript', 'typescript', 'python', 'java', 'c', 'cpp', 'csharp', 'go', 'ruby', 'rust', 'scala');

-- AlterTable
ALTER TABLE "topic" ADD COLUMN     "language" "Language" NOT NULL;
