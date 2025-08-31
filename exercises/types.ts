import { FullTopicType } from '@/types';
import React from 'react';

interface ExerciseContextType {
  exercises: FullTopicType[];
  addExercise: (exercise: FullTopicType) => void;
  deleteExercise: (exerciseId: string) => void;
  selectedExercise: FullTopicType | null;
  updateSelectedExercise: (exerciseId: string) => void;
  getNextExercise: () => void;
  getPreviousExercise: () => void;
}

export type { ExerciseContextType };
