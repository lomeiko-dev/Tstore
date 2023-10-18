export {IQuiz, IQuizScheme, IQuizTitle, IAnswer, IQuestion} from "./model/types/quiz-scheme.ts";

export {incrementPage, uploadQuizzes, quizReducer} from "./model/slice/quiz-slice.ts";

export {uploadQuizThunk} from "./model/services/upload-quiz-thunk.ts";

export {quizzesSelector, errorSelector, isLoadingSelector} from "./model/selectors/quiz-selectors.ts";