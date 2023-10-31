import {IQuiz, IQuizQuestion} from "entities/quiz";

interface IQuizNonId extends Omit<IQuiz, "id" | "id_use">{}

export interface IFormQuizScheme {
    quizDetails: IQuizNonId,
    isLoading: boolean,
    error: string | undefined,
    errorNameQuiz: string | undefined,
    errorThemeQuiz: string | undefined,
}

export interface IFormQuizQuestionsScheme {
    questions: IQuizQuestion[]
}

