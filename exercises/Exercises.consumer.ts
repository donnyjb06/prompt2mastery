import { ExerciseContext } from "./Exercises.context";
import { useContext } from "react";

export const useExercises = () => {
  const context = useContext(ExerciseContext)

  if (!context) {
    throw new Error("useExercises must be used inside of ExercisesProvider component")
  }

  return context
}