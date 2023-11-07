import React, { useCallback } from 'react'
import style from './QuestionQuiz.module.scss'

import { styledText, Text } from 'shared/ui/text'
import { Image, imageStyle } from 'shared/ui/image'
import { AnswerQuiz } from '../answer-quiz/AnswerQuiz.tsx'

import { IQuizQuestion } from 'entities/quiz'

import { useAppSelector } from 'shared/lib/hooks/useAppSelector.tsx'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'

import { indexQuestionSelector, questionAnswerSelector } from '../../model/selectors/passing-quiz-selector.ts'
import { changeAnswer } from '../../model/slice/passing-quiz-slice.ts'

interface IQuestionQuizProps extends Omit<IQuizQuestion, 'url'> {}

export const QuestionQuiz: React.FC<IQuestionQuizProps> = (props) => {
  const {
    question,
    answers,
    illustrations
  } = props

  const dispatch = useAppDispatch()
  const indexQuestion = useAppSelector(indexQuestionSelector)

  const questionAnswer = useAppSelector(state =>
    questionAnswerSelector(state, indexQuestion))

  const selectAnswerHandler = useCallback((index: number) => {
    dispatch(changeAnswer(index))
  }, [dispatch])

  return (
      <div className={style.form}>
          <Text styled={styledText.SUBTITLE}>{question}</Text>

          {illustrations &&
              <div className={style.image_container}>
                  {illustrations.map(image =>
                      <Image
                          styled={imageStyle.RECTANGLE}
                          className={style.illustration}
                          key={image}
                          alt="illustration" src={image}/>)}
              </div>}

          {answers &&
              <div className={style.answers}>
                  {answers.map((item, index) =>
                      <AnswerQuiz
                          checked={questionAnswer[index]}
                          onChecked={() => selectAnswerHandler(index)}
                          key={index} {...item} />)}
              </div>}
      </div>
  )
}
