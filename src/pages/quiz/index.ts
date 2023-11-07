import { lazy } from 'react'

export const QuizPageLazy = lazy(async () => await import('./ui/QuizPage.tsx'))
