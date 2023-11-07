import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPassingQuizScheme } from '../types/passing-quiz-scheme.ts'
import { IQuizQuestion } from 'entities/quiz'

const initialState: IPassingQuizScheme = {
  questionResults: [],
  indexQuestion: 0
}

const passingQuizSlice = createSlice({
  name: 'passing-quiz',
  initialState,
  reducers: {
    initQuestion: (state, action: PayloadAction<IQuizQuestion[]>) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.questionResults.push({ answers: [] })
      }

      for (let i = 0; i < state.questionResults.length; i++) {
        state.questionResults[i].answers = Array(action.payload[i].answers.length).fill(false)
      }
    },
    changeAnswer: (state, action: PayloadAction<number>) => {
      state.questionResults[state.indexQuestion].answers[action.payload] =
          !state.questionResults[state.indexQuestion].answers[action.payload]
    },
    incrementIndexQuestion: (state) => {
      state.indexQuestion += 1
    },
    decrementIndexQuestion: (state) => {
      state.indexQuestion -= 1
    }
  }
})

export const passingQuizReducer = passingQuizSlice.reducer
export const { decrementIndexQuestion, incrementIndexQuestion, changeAnswer, initQuestion } = passingQuizSlice.actions
