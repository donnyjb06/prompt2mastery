'use server';

import { ai } from './geminiClient';
import { Type } from '@google/genai';

export const generateExercises = async (
  amountOfExercises: number = 5,
  exerciseTopic: string,
) => {
  const prompt = [
    {
      role: 'user',
      parts: [
        {
          text: `You are an expert programming instructor who specializes in designing structured, progressive exercises for students learning software development.

          You will generate exactly ${amountOfExercises} exercises to help me practice the topic "${exerciseTopic}". 

          These exercises should:
          - Be ordered clearly from beginner to expert level, increasing in difficulty with each step.
          - Each exercise must be well-defined and clearly scoped to take approximately 30 minutes to complete.
          - Include *no solutions or hints* about the answer.
          - Include properly formatted JavaScript boilerplate code with **2-space indentation** for any starter code or function signatures needed.
          - Provide precise, complete requirements describing what the student must implement or achieve in that exercise.
          - Requirements should be a clear, numbered list of steps if there are multiple sub-tasks. Use 1., 2., 3. formatting.

          Output should be **strictly in JSON**. The format must match exactly:

          \`\`\`json
          [
            {
              "topic": "string (the topic name)",
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
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            topic: {
              type: Type.STRING,
            },
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  questionNumber: {
                    type: Type.NUMBER,
                  },
                  boilerplateCode: {
                    type: Type.STRING,
                  },
                  requirements: {
                    type: Type.STRING,
                  },
                },
                propertyOrdering: [
                  'questionNumber',
                  'boilerplateCode',
                  'requirements',
                ],
              },
            },
          },
          propertyOrdering: ['topic', 'questions'],
        },
      },
    },
  });

  return response.text;
};
