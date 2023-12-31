import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IFormQuizQuestionsScheme } from '../types/form-quiz-scheme.ts'
import {
  type IPayloadActionAnswer,
  type IPayloadActionAnswerNonValue,
  type IPayloadActionQuestion, type IPayloadActionQuestionNonValue 
} from '../types/payload-action-scheme.ts'

const initialState: IFormQuizQuestionsScheme = {
  questions: []
}

const formQuizQuestionSlice = createSlice({
  name: 'form-quiz-questions',
  initialState,
  reducers: {
    addQuestion (state) {
      state.questions.push({ question: '', answers: [], illustrations: [], url: '' })
    },
    removeQuestion (state, action: PayloadAction<IPayloadActionQuestionNonValue>) {
      state.questions.splice(action.payload.index, 1)
    },
    changeQuestion (state, action: PayloadAction<IPayloadActionQuestion<string>>) {
      state.questions[action.payload.index].question = action.payload.value
    },
    changeUrl (state, action: PayloadAction<IPayloadActionQuestion<string>>) {
      state.questions[action.payload.index].url = action.payload.value
    },
    addIllustration (state, action: PayloadAction<IPayloadActionQuestionNonValue>) {
      const question = state.questions[action.payload.index]
      if (question.url !== '') {
        question.illustrations.push(question.url)
        question.url = ''
      }
    },
    removeIllustration (state, action: PayloadAction<IPayloadActionQuestion<number>>) {
      state.questions[action.payload.index]
        .illustrations.splice(action.payload.value, 1)
    },

    addAnswer (state, action: PayloadAction<IPayloadActionQuestionNonValue>) {
      state.questions[action.payload.index]
        .answers.push({ answer: '', illustrations: [], isCorrect: false, url: '', score: 0 })
    },
    removeAnswer (state, action: PayloadAction<IPayloadActionAnswerNonValue>) {
      state.questions[action.payload.indexQuestion]
        .answers.splice(action.payload.indexAnswer, 1)
    },
    changeAnswer (state, action: PayloadAction<IPayloadActionAnswer<string>>) {
      state.questions[action.payload.indexQuestion]
        .answers[action.payload.indexAnswer].answer = action.payload.value
    },
    changeAnswerScore: (state, action: PayloadAction<IPayloadActionAnswer<number>>) => {
      const answer = state.questions[action.payload.indexQuestion]
        .answers[action.payload.indexAnswer]

      answer.score = action.payload.value
      answer.isCorrect = (action.payload.value > 0)
    },
    changeAnswerUrl (state, action: PayloadAction<IPayloadActionAnswer<string>>) {
      state.questions[action.payload.indexQuestion]
        .answers[action.payload.indexAnswer].url = action.payload.value
    },
    toggleAnswerCorrect (state, action: PayloadAction<IPayloadActionAnswerNonValue>) {
      const answer = state.questions[action.payload.indexQuestion]
        .answers[action.payload.indexAnswer]

      if (answer.isCorrect) {
        answer.score = 0
      }

      answer.isCorrect = !answer.isCorrect
    },
    addAnswerIllustration (state, action: PayloadAction<IPayloadActionAnswerNonValue>) {
      const answer = state.questions[action.payload.indexQuestion]
        .answers[action.payload.indexAnswer]

      if (answer.url) {
        answer.illustrations.push(answer.url)
        answer.url = ''
      }
    },
    removeAnswerIllustration (state, action: PayloadAction<IPayloadActionAnswer<number>>) {
      state.questions[action.payload.indexQuestion]
        .answers[action.payload.indexAnswer]
        .illustrations.splice(action.payload.value, 1)
    }
  }
})

export const formQuizQuestionReducer = formQuizQuestionSlice.reducer
export const {
  addAnswerIllustration,
  removeAnswerIllustration,
  changeAnswer,
  removeIllustration,
  addIllustration,
  addAnswer,
  changeQuestion,
  removeQuestion,
  removeAnswer,
  addQuestion,
  changeUrl,
  toggleAnswerCorrect,
  changeAnswerUrl,
  changeAnswerScore
} = formQuizQuestionSlice.actions
