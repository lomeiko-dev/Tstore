import style from './ConstructorQuizPage.module.scss';
import {Page} from "shared/ui/page";
import {formQuizQuestionReducer, formQuizReducer, FormQuiz} from "features/form-quiz";
import {IReducer, ReducerLoader} from "shared/ui/reducer-loader";

const reducers: IReducer[] = [
    {storeKey: "formQuizReducer", reducer: formQuizReducer, save: false},
    {storeKey: "formQuizQuestionReducer", reducer: formQuizQuestionReducer, save: false}
]

const ConstructorQuizPage = () => {
    return (
        <ReducerLoader reducers={reducers}>
            <Page className={style.page}>
                <FormQuiz/>
            </Page>
        </ReducerLoader>
    );
};

export default ConstructorQuizPage;