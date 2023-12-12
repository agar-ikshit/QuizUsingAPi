import { shuffleArray } from './utils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
};
  
// export const fetchQuizQuestions = async(
//     amount: number, 
//     difficulty: Difficulty
// )=>{

//     const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
//     const data = await(await fetch(endpoint)).json();
//     return data.results.map((question: Question)=>(
//         {
//             ...question,

//             answers: shuffleArray([...question.incorrect_answers,question.correct_answer,
//             ]),
//         }
//     ));

// };

// export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
//     const maxRetries = 3;
//     let retries = 0;
  
//     while (retries < maxRetries) {
//       try {
//         const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
//         const response = await fetch(endpoint);
  
//         if (response.status === 429) {
//           const waitTime = Math.pow(2, retries) * 1000; // Exponential backoff in milliseconds
//           console.warn(`Rate limit exceeded. Retrying in ${waitTime / 1000} seconds...`);
//           await new Promise(resolve => setTimeout(resolve, waitTime));
//           retries++;
//           continue;
//         }
  
//         if (!response.ok) {
//           throw new Error(`Failed to fetch quiz questions. Status: ${response.status}`);
//         }
  
//         const data = await response.json();
  
//         if (!data.results || !Array.isArray(data.results)) {
//           throw new Error("Invalid API response format");
//         }
  
//         return data.results.map((question: Question) => ({
//           ...question,
//           answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
//         }));
//       } catch (error) {
//         console.error("Error fetching quiz questions:", error);
//         // Handle the error, e.g., return an empty array or throw an exception.
//         return [];
//       }
//     }
  
//     console.error("Exceeded maximum number of retries. Aborting request.");
//     return [];
//   };
  

