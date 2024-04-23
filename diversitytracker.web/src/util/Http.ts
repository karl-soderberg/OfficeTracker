import { PostQuestionTypeDto, Question } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

export const GetAllQuestions = async (): Promise<Array<Question>> => {
    const response = await fetch(`${API_URL}/Questions`);

    if (!response.ok) {
        const error = new Error('An error occurred while fetching questions');
        error.message = await response.json();
        throw error;
    }

    const questions = await response.json();

    return questions;
}

export const DeleteQuestion = async (question: string): void => {
    const response = await fetch(`${API_URL}/Questions/${question}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const error = new Error('An error occurred while deleting the new question');
        error.message = await response.json();
        throw error;
    }
}

export const PostQuestion = async (question: string) => {
    const newQuestion: PostQuestionTypeDto = {
        Value: question
    }
    const response = await fetch(`${API_URL}/Questions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newQuestion),
    });

    if (!response.ok) {
        const error = new Error('An error occurred while posting the new question');
        error.message = await response.json();
        throw error;
    }

    const newQuestionResponse = await response.json();
    console.log(newQuestionResponse);
    return newQuestionResponse;
}