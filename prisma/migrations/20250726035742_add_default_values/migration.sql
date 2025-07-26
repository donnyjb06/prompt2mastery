-- AlterTable
ALTER TABLE "feedback" ALTER COLUMN "strengths" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "weaknesses" SET DEFAULT ARRAY[]::TEXT[];
