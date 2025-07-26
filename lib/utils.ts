import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateAuthSchema = () => {
  return z.object({
    name: z
      .string()
      .min(1, 'Name must be at least 4 characters')
      .max(50, 'Name cannot be more than 50 characters')
      .or(z.literal(''))
      .optional(),
    email: z
      .string()
      .email('Invalid email address')
      .min(4, 'Email must be at least 4 characters')
      .max(70, 'Email cannot be more that 70 characters'),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W_]{8,}$/,
        'Invalid password',
      ),
  });
};
