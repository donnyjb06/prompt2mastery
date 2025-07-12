'use server';

import { ai } from './geminiClient';
import { Type } from '@google/genai';

export const generateExercises = async (
  amountOfExercises: number = 5,
  exerciseTopic: string,
  language: string
) => {
  const prompt = [
    {
      role: 'user',
      parts: [
        {
          text: `You are an expert programming instructor who specializes in designing structured, progressive exercises for students learning software development.
  
          You will generate exactly ${amountOfExercises} exercises to help me practice the topic "${exerciseTopic}" in the "${language}" programming language. 
  
          These exercises should:
          - Be ordered clearly from beginner to expert level, increasing in difficulty with each step.
          - Each exercise must be well-defined and clearly scoped to take approximately 30 minutes to complete.
          - Include *no solutions or hints* about the answer.
          - Include properly formatted ${language} boilerplate code with **2-space indentation** for any starter code or function signatures needed.
          - Provide precise, complete requirements describing what the student must implement or achieve in that exercise.
          - Requirements should be a clear, numbered list of steps if there are multiple sub-tasks. Use 1., 2., 3. formatting.
  
          Output should be **strictly in JSON**. The format must match exactly:
  
          \`\`\`json
          [
            {
              "topic": "string (the topic name)",
              "language": "string (programming language of the topic)",
              "questions": [
                {
                  "questionNumber": number (the sequential number of the question),
                  "boilerplateCode": "string (the starter code formatted with 2-space tabs)",
                  "requirements": "string (clear, detailed instructions)"
                }
              ]
            }
          ]
          \`\`\`
          If the topic requested does not make sense or is not applicable in the selected programming language, return an error and don't return the previously mentioned JSON output.
  
          The format for the error must match exactly:
  
          \`\`\`json
          {
            "error": "topic is invalid for the selected language",
            "language": string (The programming language the user inputted),
            "topic": string (The topic the user inputted)
          }
          \`\`\`
  
          You must only return **one single topic object** in the JSON array for "${exerciseTopic}".  
          Do not create multiple topic objects for the same topic.  
  
          Do not include *any* explanatory text outside the JSON. Only return the JSON matching the exact schema above.`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
    }
  });

  return response.text;
};
