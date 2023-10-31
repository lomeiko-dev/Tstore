export { type IQuiz, type IQuizScheme, type IAnswer, type IQuizQuestion, type IQuizDetailsScheme } from './model/types/quiz-scheme.ts'

export { incrementPage, uploadQuizzes, quizReducer, removeQuiz } from './model/slice/quiz-slice.ts'
export { setQuiz, quizDetailsReducer } from './model/slice/quiz-details-slice.ts'

export { uploadQuizThunk } from './model/services/upload-quiz-thunk.ts'
export { uploadQuizDetailsThunk } from './model/services/upload-quiz-details-thunk.ts'

export { quizzesSelector, errorSelector, isLoadingSelector, totalCountSelector } from './model/selectors/quiz-selectors.ts'
export { quizDetailsSelector } from './model/selectors/quiz-details-selector.ts'

export { QuizCard, type IQuizCardProps } from './ui/quiz-card/QuizCard.tsx'
export { QuizSkeleton } from './ui/quiz-card/skeleton/QuizSkeleton.tsx'
