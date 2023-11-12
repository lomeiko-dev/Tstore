import { IThunk } from 'app/providers/store'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  incrementPage,
  setIsAllThemes,
  uploadThemes as uploadThemesAction
} from '../slices/sorting-quiz-theme-slice.ts'
import { QUIZ } from 'shared/api/consts.ts'
import { IQuiz } from 'entities/quiz'

export const uploadQuizThemeThunk = createAsyncThunk<string[], void, IThunk>('theme/upload',
  async (_, thunkAPI) => {
    const { start = 0, end = 5, limit = 5, themes = [] } = thunkAPI.getState().sortingQuizThemeReducer ?? {}
    try {
      const result: (string | undefined)[] = []
      let thisStart = start
      let thisEnd = end

      const filterValue = themes.map((theme) => `theme_ne=${theme}&`)
        
      for (;result.length !== end - start;) {
        const items =
            await thunkAPI.extra.api.get<IQuiz[]>(QUIZ + `?_start=${thisStart - filterValue.length}&_end=${thisEnd - filterValue.length}&${filterValue.join('')}`)
              .then(res => res.data)

        items.forEach(item => {
          if (!result.includes(item.theme) && !themes.includes(item.theme)) {
            result.push(item.theme)
          }
        })

        if (result.length <= limit) {
          thisStart += limit
          thisEnd += limit
        }

        if (items.length < limit) {
          thunkAPI.dispatch(setIsAllThemes(true))
          break
        }

        if (result.length >= limit) {
          thunkAPI.dispatch(incrementPage())
          break
        }
      }

      const res = result.filter(item => item !== undefined) as string[]
      thunkAPI.dispatch(uploadThemesAction(res))
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  })
