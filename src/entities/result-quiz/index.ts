export type { IResultQuiz, IResultQuizScheme } from './model/types/result-quiz-scheme.ts'

export { errorSelector, isLoadingSelector, resultQuizSelector, totalCountSelector } from './model/selectors/result-quiz-selectors.ts'

export { uploadResults, resultQuizReducer } from './model/slice/result-quiz-slice.ts'

export { uploadResultQuizThunk } from './model/services/upload-result-quiz-thunk.ts'
export { createResultQuizThunk } from './model/services/create-result-quiz-thunk.ts'

export { ResultCard } from './ui/result-card/ResultCard.tsx'
export { ResultInfo } from './ui/result-info/ResultInfo.tsx'
