import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'
import type React from 'react'
import { useCallback } from 'react'
import {
  changeQuizDescription,
  changeQuizIcon,
  changeQuizName,
  changeQuizTags,
  changeQuizTheme
} from '../../model/slices/form-quiz-slice.ts'

export const useHandlersQuizTitle = () => {
  const dispatch = useAppDispatch()

  const updateQuizNameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeQuizName(e.target.value))
  }, [dispatch])

  const updateQuizIconHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeQuizIcon(e.target.value))
  }, [dispatch])

  const updateQuizDescriptionHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeQuizDescription(e.target.value))
  }, [dispatch])

  const updateQuizThemeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeQuizTheme(e.target.value))
  }, [dispatch])

  const updateQuizTagsHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeQuizTags(e.target.value))
  }, [dispatch])

  return { updateQuizNameHandler, updateQuizIconHandler, updateQuizDescriptionHandler, updateQuizThemeHandler, updateQuizTagsHandler }
}
