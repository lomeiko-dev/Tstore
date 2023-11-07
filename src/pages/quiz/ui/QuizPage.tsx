import style from './QuizPage.module.scss'

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector.tsx'

import { IReducer, ReducerLoader } from 'shared/ui/reducer-loader'

import { PassingQuiz, passingQuizReducer } from 'features/passing-quiz'
import { resultQuizReducer } from 'entities/result-quiz'
import { errorSelector, getQuizThunk, isLoadingSelector, quizDetailsReducer, quizDetailsSelector } from 'entities/quiz'

const reducers: IReducer[] = [
  { reducer: passingQuizReducer, storeKey: 'passingQuizReducer', save: false },
  { reducer: quizDetailsReducer, storeKey: 'quizDetailsReducer', save: false },
  { reducer: resultQuizReducer, storeKey: 'resultQuizReducer', save: false }
]

const QuizPage = React.memo(() => {
  const dispatch = useAppDispatch()
  const { id = '' } = useParams()

  useEffect(() => {
    dispatch(getQuizThunk(id))
  }, [dispatch, id])

  const quiz = useAppSelector(quizDetailsSelector)
  const error = useAppSelector(errorSelector)
  const isLoading = useAppSelector(isLoadingSelector)

  return (
      <ReducerLoader reducers={reducers}>
          <div className={style.page}>
              <PassingQuiz error={error} isLoading={isLoading} questions={quiz && quiz.questions}/>
          </div>
      </ReducerLoader>
  )
})

export default QuizPage
