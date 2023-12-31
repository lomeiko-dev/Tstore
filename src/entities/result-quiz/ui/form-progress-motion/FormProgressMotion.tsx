import React from 'react'
import style from './FormProgressMotion.module.scss'
import { questionResult } from '../../model/types/result-quiz-scheme.ts'
import { IQuizQuestion } from 'entities/quiz'
import { styledText, Text } from 'shared/ui/text'
import { Panel } from 'shared/ui/panel'

interface IFormProgressMotionProps {
  questions: IQuizQuestion[]
  answers: questionResult[]
}

export const FormProgressMotion: React.FC<IFormProgressMotionProps> = React.memo((props) => {
  const {
    answers,
    questions
  } = props

  if (answers === undefined || questions === undefined)
    return

  return (
      <div className={style.form}>
          {questions.map((question, indexQuestion) => (<>
              <Text key={indexQuestion} className={style.question} styled={styledText.DESCRIPTION}>{question.question}</Text>
              {question.answers.map((answer, indexAnswer) =>
                  <Panel
                      className={answers[indexQuestion].answers[indexAnswer]
                        ? style.correct
                        : style.not_correct} key={indexQuestion}>{answer.answer === '' ? indexAnswer + 1 : answer.answer}</Panel>)}
          </>))}
      </div>
  )
})
