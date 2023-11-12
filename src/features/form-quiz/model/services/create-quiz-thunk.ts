import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunk } from 'app/providers/store'
import { QUIZ } from 'shared/api/consts.ts'
import { type IQuiz, uploadQuizzes } from 'entities/quiz'
import { errorsSelector } from '../selectors/form-quiz-selectors.ts'
import { type NavigateFunction } from 'react-router-dom'
import { pathRoutes } from 'shared/config/routes'

export const createQuizThunk = createAsyncThunk<IQuiz | undefined, NavigateFunction, IThunk>('quiz/create',
  async (navigate, thunkAPI) => {
    const quiz = thunkAPI.getState().formQuizReducer?.quizDetails
    const errors = errorsSelector(thunkAPI.getState())

    try {
      if (quiz === undefined)
        throw new Error('Данные тесты не найдены')
        
      if (quiz?.name === '')
        throw new Error('Название теста не может быть пустым')

      if (JSON.stringify(errors) !== JSON.stringify([undefined, undefined, undefined]))
        throw new Error()

      if (quiz?.questions.length === 0)
        throw new Error('В тесте должен быть как минимум 1 вопрос')

      const currentDate = new Date().toISOString().slice(0, 10)

      const newQuiz: IQuiz = {
        id: '',
        ...quiz,
        dateCreate: String(currentDate)
      }

      const response = await thunkAPI.extra.api.post<IQuiz>(QUIZ, newQuiz)

      thunkAPI.dispatch(uploadQuizzes({
        data: [response.data],
        count: response.headers['x-total-count']
      }))

      navigate(pathRoutes.main.name)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  })
