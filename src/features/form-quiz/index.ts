export {type IFormQuizScheme, type IFormQuizQuestionsScheme} from "./model/types/form-quiz-scheme.ts";

export {formQuizReducer} from "./model/slices/form-quiz-slice.ts";
export {formQuizQuestionReducer} from "./model/slices/form-quiz-question-slice.ts";

export {deleteQuizThunk} from "./model/services/delete-quiz-thunk.ts";

export {FormQuiz} from "./ui/form-quiz/FormQuiz.tsx";