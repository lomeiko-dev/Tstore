import { type IStore } from 'app/providers/store'

export const quizQuestionSelector = (state: IStore, index: number) =>
  state.formQuizQuestionReducer?.questions[index].question

export const quizQuestionUrlSelector = (state: IStore, index: number) =>
  state.formQuizQuestionReducer?.questions[index].url

export const quizQuestionIllustrationSelector = (state: IStore, index: number) =>
  state.formQuizQuestionReducer?.questions[index].illustrations

export const quizQuestionAnswersSelector = (state: IStore, index: number) =>
  state.formQuizQuestionReducer?.questions[index].answers

export const quizAnswerSelector = (state: IStore, indexQuestion: number, indexAnswer: number) =>
  state.formQuizQuestionReducer
    ?.questions[indexQuestion]
    .answers[indexAnswer].answer

export const quizAnswerUrlSelector = (state: IStore, indexQuestion: number, indexAnswer: number) =>
  state.formQuizQuestionReducer
    ?.questions[indexQuestion]
    .answers[indexAnswer].url

export const quizAnswerIllustrationSelector = (state: IStore, indexQuestion: number, indexAnswer: number) =>
  state.formQuizQuestionReducer
    ?.questions[indexQuestion]
    .answers[indexAnswer].illustrations

export const quizAnswerIsCorrectSelector = (state: IStore, indexQuestion: number, indexAnswer: number) =>
  state.formQuizQuestionReducer
    ?.questions[indexQuestion]
    .answers[indexAnswer].isCorrect

export const quizAnswerScoreSelector = (state: IStore, indexQuestion: number, indexAnswer: number) =>
  state.formQuizQuestionReducer
    ?.questions[indexQuestion]
    .answers[indexAnswer].score

export const quizQuestionsSelectors = (state: IStore) =>
  state.formQuizQuestionReducer?.questions
