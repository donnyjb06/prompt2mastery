import { createContext } from "react";
import { ExerciseContextType } from "./types";

export const ExerciseContext = createContext<ExerciseContextType | null>(null)