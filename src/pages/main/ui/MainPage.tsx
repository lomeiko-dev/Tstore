import {useEffect, useState} from "react";
import style from "./MainPage.module.scss";
import {errorSelector, isLoadingSelector, quizReducer, quizzesSelector, totalCountSelector, uploadQuizThunk} from "entities/quiz";
import {useAppSelector} from "shared/lib/hooks/useAppSelector.tsx";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";

import {Page} from "shared/ui/page";
import {IReducer, ReducerLoader} from "shared/ui/reducer-loader";
import {QuizList} from "./quiz-list/QuizList.tsx";

import AddTestIcon from "shared/assets/img/icons/add-test.svg";
import {Button} from "shared/ui/button";

const reducers: IReducer[] = [{storeKey: "quizReducer", reducer: quizReducer, save: false}];

const MainPage = () => {
    const dispatch = useAppDispatch();

    const quizzes = useAppSelector(quizzesSelector);
    const totalCount = useAppSelector(totalCountSelector);
    const isLoading = useAppSelector(isLoadingSelector);
    const error = useAppSelector(errorSelector);

    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        if(fetching)
            dispatch(uploadQuizThunk()).finally(() => setFetching(false));
    }, [fetching]);

    const fetchingData = () => {
        const count = quizzes?.length || 0
        if(count == totalCount)
            return

        setFetching(true);
    }

    return (
        <ReducerLoader reducers={reducers}>
            <Page onScrollEnd={fetchingData}>
                <Button className={style.button_add}>
                    <img alt="add test" src={AddTestIcon}/>
                </Button>
                <QuizList isLoading={isLoading} error={error} data={quizzes}/>
            </Page>
        </ReducerLoader>
    );
};

export default MainPage;