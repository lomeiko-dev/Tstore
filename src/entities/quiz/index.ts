export {type IQuiz, type IQuizScheme, type IQuizTitle, type IAnswer, type IQuestion, type IQuizDetailsScheme} from "./model/types/quiz-scheme.ts";

export {incrementPage, uploadQuizzes, quizReducer} from "./model/slice/quiz-slice.ts";
export {setQuiz, quizDetailsReducer} from "./model/slice/quiz-details-slice.ts";

export {uploadQuizThunk} from "./model/services/upload-quiz-thunk.ts";
export {uploadQuizDetailsThunk} from "./model/services/upload-quiz-details-thunk.ts";

export {quizzesSelector, errorSelector, isLoadingSelector, totalCountSelector} from "./model/selectors/quiz-selectors.ts";
export {quizDetailsSelector,
    errorSelector as errorSelectorQuizDetails,
    isLoadingSelector as isLoadingSelectorQuizDetails} from "./model/selectors/quiz-details-selector.ts";

export {QuizCard} from "./ui/quiz-card/QuizCard.tsx";
export {QuizSkeleton} from "./ui/quiz-card/skeleton/QuizSkeleton.tsx";