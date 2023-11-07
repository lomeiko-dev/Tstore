import { IStore } from 'app/providers/store'

export const quizDetailsSelector = (state: IStore) => state.quizDetailsReducer?.quiz
