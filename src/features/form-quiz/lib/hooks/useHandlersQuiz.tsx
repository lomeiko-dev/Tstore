import { useCallback } from 'react'
import { type IQuizQuestion } from 'entities/quiz'
import { setAuthor, setQuestions } from '../../model/slices/form-quiz-slice.ts'
import { createQuizThunk } from '../../model/services/create-quiz-thunk.ts'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'
import { useAuth } from 'entities/auth'
import { useNavigate } from 'react-router-dom'
import { pathRoutes } from 'shared/config/routes'

export const useHandlersQuiz = () => {
  const dispatch = useAppDispatch()
  const authId = useAuth()?.id ?? ''
  const navigate = useNavigate()

  const createQuizHandler = useCallback((questions: IQuizQuestion[]) => {
    dispatch(setAuthor(authId))
    dispatch(setQuestions(questions))
    dispatch(createQuizThunk(navigate))
  }, [dispatch, navigate])

  const backHandler = useCallback(() => {
    navigate(pathRoutes.main.name)
  }, [navigate])

  return { createQuizHandler, backHandler }
}
