import { FullTopicType } from '@/types';
import React from 'react';

interface ExerciseContextType {
  exercises: FullTopicType[]
  addExercise: (exercise: FullTopicType) => void;
  deleteExercise: (exerciseId: string) => void;
  selectedExercise: FullTopicType | undefined;
  updateSelectedExercise: (exerciseId: string) => void;
}

export type { ExerciseContextType };
