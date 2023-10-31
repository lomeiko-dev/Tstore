import style from './QuizItem.module.scss';
import {IQuiz, QuizCard} from "entities/quiz";
import React, {useCallback} from "react";
import {IconButton} from "shared/ui/icon-button";

import DeleteIcon from "shared/assets/img/icons/trash.svg?react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {deleteQuizThunk} from "features/form-quiz";
import {useAuth} from "entities/auth";


export const QuizItem: React.FC<IQuiz> = (props) => {
    const dispatch = useAppDispatch();
    const idAuth = useAuth()?.id || "";

    const deleteQuizHandler = useCallback(() => {
        dispatch(deleteQuizThunk(props.id));
    }, [dispatch])

    return (
        <div className={style.item}>
            <QuizCard
                onClickQuiz={() => null}
                theme={props.theme}
                icon={props.icon}
                name={props.name}
                description={props.description}
                tags={props.tags}
                dateCreate={props.dateCreate}/>

            {props.id_user === idAuth &&
                <div className={style.button_wrapper}>
                    <IconButton color="red" className={style.deleted} Icon={DeleteIcon} onClick={deleteQuizHandler}/>
                </div>}
        </div>
    );
};