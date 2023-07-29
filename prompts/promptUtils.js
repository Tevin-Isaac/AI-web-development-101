// file: prompts/promptUtils.js

/**
 * Get the system prompt for Study Buddy.
 * @returns {object} The system prompt object.
 */
export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are a knowledgeable study buddy, ready to assist with your academic questions.",
  };
}

/**
 * Get the user prompt for Study Buddy.
 * @param {string} subject - The academic subject of the question.
 * @param {string} question - The academic question or problem.
 * @returns {object} The user prompt object.
 */
export function getUserPrompt(subject, question) {
  return {
    role: "user",
    content: `I need help with my ${subject} question: ${question}.`,
  };
}

/**
 * Get the functions for Study Buddy API.
 * @returns {Array} An array containing the function objects.
 */
export function getFunctions() {
  return [
    {
      name: "answer_academic_question",
      description: "Provide step-by-step answers for academic questions.",
      parameters: {
        type: "object",
        properties: {
          subject: {
            type: "string",
            description: "The academic subject of the question",
          },
          question: {
            type: "string",
            description: "The academic question or problem",
          },
          answer: {
            type: "string",
            description: "The generated answer for the academic question",
          },
          instructions: {
            type: "array",
            description: "An array of strings representing step-by-step instructions for solving the academic question",
            items: {
              type: "string",
            },
          },
        },
        required: ["subject", "question", "answer", "instructions"],
      },
    },
  ];
}
