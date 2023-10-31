import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import React, {useCallback} from "react";
import {
    addAnswer, addAnswerIllustration, changeAnswer,
    removeAnswer, removeAnswerIllustration, changeAnswerUrl, toggleAnswerCorrect
} from "../../model/slices/form-quiz-question-slice.ts";

interface IUseHandlersQuizAnswerProps {
    idQuestion: number,
    idAnswer: number
}

export const useHandlersQuizAnswer = ({idAnswer, idQuestion}: IUseHandlersQuizAnswerProps) => {
    const dispatch = useAppDispatch();

    const addAnswerHandler = useCallback(() => {
        dispatch(addAnswer({index: idQuestion}));
    }, [dispatch, idQuestion]);

    const removeAnswerHandler = useCallback(() => {
        dispatch(removeAnswer({
            indexAnswer: idAnswer,
            indexQuestion: idQuestion
        }));
    }, [dispatch, idQuestion, idAnswer]);

    const changeQuizAnswerHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeAnswer({
            indexQuestion: idQuestion,
            indexAnswer: idAnswer,
            value: e.target.value
        }));
    }, [dispatch, idQuestion, idAnswer]);

    const changeQuizAnswerUrlHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeAnswerUrl({
            indexQuestion: idQuestion,
            indexAnswer: idAnswer,
            value: e.target.value
        }));
    }, [dispatch, idQuestion, idAnswer]);

    const toggleQuizAnswerIsCorrectHandler = useCallback(() => {
        dispatch(toggleAnswerCorrect({
            indexAnswer: idAnswer,
            indexQuestion: idQuestion
        }));
    }, [dispatch, idQuestion, idAnswer]);

    const addIllustrationHandler = useCallback(() => {
        dispatch(addAnswerIllustration({
            indexQuestion: idQuestion,
            indexAnswer: idAnswer
        }));
    }, [dispatch, idQuestion, idAnswer]);

    const removeIllustrationHandler = useCallback((index: number) => {
        dispatch(removeAnswerIllustration({
            indexQuestion: idQuestion,
            indexAnswer: idAnswer,
            value: index
        }));
    }, [dispatch, idQuestion, idAnswer]);

    return {addAnswerHandler, removeAnswerHandler, changeQuizAnswerHandler, changeQuizAnswerUrlHandler, toggleQuizAnswerIsCorrectHandler, addIllustrationHandler, removeIllustrationHandler}
};