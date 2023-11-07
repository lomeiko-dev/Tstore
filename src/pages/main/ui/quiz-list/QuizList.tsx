import React from 'react'
import style from './QuizList.module.scss'

import { type IQuiz, QuizSkeleton } from 'entities/quiz'
import { styledText, Text } from 'shared/ui/text'
import { QuizItem } from './quiz-item/QuizItem.tsx'

interface IQuizListProps {
  data?: IQuiz[]
  isLoading: boolean
  error?: string
}

const skeletonContainer: React.ReactNode = (
    <>
        <QuizSkeleton/>
        <QuizSkeleton/>
        <QuizSkeleton/>
    </>
)

export const QuizList: React.FC<IQuizListProps> = React.memo((props) => {
  const {
    data,
    error,
    isLoading
  } = props

  let result: React.ReactNode

  if (isLoading) {
    result = skeletonContainer
  }

  if (error !== undefined) {
    result = <Text styled={styledText.ERROR}>{error}</Text>
  }

  if (data === undefined) {
    return
  }

  return (
      <div className={style.list}>
          {data.map(item => <QuizItem key={item.id} {...item}/>)}
          {result}
      </div>
  )
})
