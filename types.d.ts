import { ReactNode } from 'react';
import { Language } from './generated/prisma';
import { Prisma } from '@/generated/prisma';

const topicWithQuestions = Prisma.validator<Prisma.TopicDefaultArgs>()({
  select: {
    language: true,
    topic: true,
    questions: {
      select: {
        questionNumber: true,
        boilerplateCode: true,
        requirements: true
      }
    }
  }
});

type TopicWithQuestions = Prisma.TopicGetPayload<typeof topicWithQuestions>;

const fullTopicType = Prisma.validator<Prisma.TopicDefaultArgs>() ({
  include: {
    feedback: true,
    questions: true
  }
})

type FullTopicType = Prisma.TopicGetPayload<typeof fullTopicType>

const feedbackWithoutId = Prisma.validator<Prisma.FeedbackDefaultArgs>()({
  select: {
    strengths: true,
    weaknesses: true,
    score: true,
  }
})

type FeedbackWithoutId = Prisma.FeedbackGetPayload<typeof feedbackWithoutId>

interface GeminiTopicError {
  error: string,
  language: string,
  topic: string
}

interface Props {
  children?: ReactNode;
  className?: string;
}

type LanguageVersion = {
  language: string;
  version: string;
};

interface IFormInputs {
  name?: string;
  email: string;
  password: string;
}

export type { Props, LanguageVersion, IFormInputs, TopicWithQuestions, GeminiTopicError, FeedbackWithoutId, FullTopicType };
