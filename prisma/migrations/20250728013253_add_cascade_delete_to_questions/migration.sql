-- DropForeignKey
ALTER TABLE "feedback" DROP CONSTRAINT "feedback_topicId_fkey";

-- DropForeignKey
ALTER TABLE "feedback" DROP CONSTRAINT "feedback_userId_fkey";

-- DropForeignKey
ALTER TABLE "question" DROP CONSTRAINT "question_topicId_fkey";

-- DropForeignKey
ALTER TABLE "topic" DROP CONSTRAINT "topic_userId_fkey";

-- AddForeignKey
ALTER TABLE "topic" ADD CONSTRAINT "topic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
