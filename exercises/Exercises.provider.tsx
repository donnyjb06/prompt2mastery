'use client';

import { ExerciseContext } from './Exercises.context';
import { useState } from 'react';
import { FullTopicType, Props } from '@/types';

const ExerciseProvider = ({ children }: Props) => {
  const [exercises, setExercises] = useState<FullTopicType[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<FullTopicType | null>(null);

  const addExercise = (exercise: FullTopicType) => {
    setExercises((prevExercises) => [exercise, ...prevExercises]);
  };

  const deleteExercise = (exerciseId: string) => {
    setExercises((prevExercises) => {
      return prevExercises.filter((exercise) => exerciseId !== exercise.id);
    });
  };

  const updateSelectedExercise = (exerciseId: string) => {
    setSelectedExercise(exercises.find(exercise => exercise.id === exerciseId) || null)
  }

  const getNextExercise = () => {
    if (!selectedExercise) return
    const index = exercises.indexOf(selectedExercise)

    if (index !== -1 && index < exercises.length - 1) {
      setSelectedExercise(exercises[index + 1])
    }
  }

  const getPreviousExercise = () => {
    if (!selectedExercise) return
    const index = exercises.indexOf(selectedExercise)

    if (index !== -1 && index > 0) {
      setSelectedExercise(exercises[index - 1])
    }
  }

  return (
    <ExerciseContext.Provider
      value={{
        exercises,
        addExercise,
        deleteExercise,
        selectedExercise,
        updateSelectedExercise,
        getNextExercise,
        getPreviousExercise
      }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider
