import React from "react";
import style from './QuizList.module.scss';

import {IQuiz, QuizSkeleton} from "entities/quiz";
import {styledText, Text} from "shared/ui/text";
import {QuizItem} from "pages/main/ui/quiz-list/quiz-item/QuizItem.tsx";

interface IQuizListProps {
    data?: IQuiz[],
    isLoading: boolean,
    error?: string,
}

const skeletonContainer: React.ReactNode = (
    <>
        <QuizSkeleton/>
        <QuizSkeleton/>
        <QuizSkeleton/>
    </>
)

export const QuizList: React.FC<IQuizListProps> = React.memo(({data, error, isLoading}) => {
    let result: React.ReactNode;

    if(isLoading)
        result = skeletonContainer

    if(error !== undefined)
        result = <Text styled={styledText.ERROR}>{error}</Text>

    if(data === undefined)
        return

    return (
        <div className={style.list}>
            {data.map(item => <QuizItem key={item.id} {...item}/>)}
            {result}
        </div>
    );
});