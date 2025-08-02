'use client';

import { ExerciseContext } from './Exercises.context';
import { useState } from 'react';
import { FullTopicType, Props } from '@/types';

const ExerciseProvider = ({ children }: Props) => {
  const [exercises, setExercises] = useState<FullTopicType[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<FullTopicType>();

  const addExercise = (exercise: FullTopicType) => {
    setExercises((prevExercises) => [exercise, ...prevExercises]);
  };

  const deleteExercise = (exerciseId: string) => {
    setExercises((prevExercises) => {
      return prevExercises.filter((exercise) => exerciseId !== exercise.id);
    });
  };

  const updateSelectedExercise = (exerciseId: string) => {
    setSelectedExercise(exercises.find(exercise => exercise.id === exerciseId))
  }

  return (
    <ExerciseContext.Provider
      value={{
        exercises,
        addExercise,
        deleteExercise,
        selectedExercise,
        updateSelectedExercise,
      }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider
