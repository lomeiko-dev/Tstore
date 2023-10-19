export interface IQuizTitle{
    id: string,
    name: string,
    icon: string,
    description: string,
    tags: string,
    theme: string,
}

export interface IQuestion{
    id: string,
    question: string,
    illustrations: string[],
    answers: IAnswer[],
}

export interface IAnswer {
    id: string,
    isCorrect: boolean,
    answer: string,
    illustrations: string[],
}

export interface IQuiz {
    id: string,
    title: IQuizTitle,
    questions: IQuestion[],
    dateCreate: string,
}

export interface IQuizScheme {
    quizzes: IQuiz[],
    totalCount: number,
    page: number,
    limit: number,
    isLoading: boolean,
    error?: string
}

export interface IQuizDetailsScheme {
    quiz: IQuiz | undefined,
    isLoading: boolean,
    error?: string,
}