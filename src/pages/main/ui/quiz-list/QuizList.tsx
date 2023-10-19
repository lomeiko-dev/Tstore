import React from "react";
import style from './QuizList.module.scss';

import {IQuiz, QuizSkeleton} from "entities/quiz";
import {QuizCard} from "entities/quiz";
import {styledText, Text} from "shared/ui/text";

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
            {data.map(item => <QuizCard key={item.id} onClickQuiz={() => null} {...item.title}/>)}
            {result}
        </div>
    );
});