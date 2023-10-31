import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'
import type React from 'react'
import { useCallback } from 'react'
import {
  addIllustration,
  addQuestion,
  changeQuestion,
  removeIllustration, removeQuestion, changeUrl
} from '../../model/slices/form-quiz-question-slice.ts'

interface IUseHandlersQuiQuestionProps {
  id: number
}

export const useHandlersQuizQuestion = ({ id }: IUseHandlersQuiQuestionProps) => {
  const dispatch = useAppDispatch()

  const addQuestionHandle = useCallback(() => {
    dispatch(addQuestion())
  }, [dispatch])

  const removeQuestionHandle = useCallback(() => {
    dispatch(removeQuestion({ index: id }))
  }, [dispatch, id])

  const updateQuizQuestionHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeQuestion({
      index: id,
      value: e.target.value
    }))
  }, [dispatch, id])

  const updateQuizQuestionUrlHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeUrl({
      index: id,
      value: e.target.value
    }))
  }, [dispatch, id])

  const addIllustrationHandler = useCallback(() => {
    dispatch(addIllustration({ index: id }))
  }, [dispatch, id])

  const removeIllustrationHandler = useCallback((index: number) => {
    dispatch(removeIllustration({
      index: id,
      value: index
    }))
  }, [dispatch, id])

  return { updateQuizQuestionHandler, updateQuizQuestionUrlHandler, addIllustrationHandler, removeIllustrationHandler, addQuestionHandle, removeQuestionHandle }
}
