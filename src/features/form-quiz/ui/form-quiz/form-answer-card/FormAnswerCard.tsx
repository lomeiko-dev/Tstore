import React from 'react'
import style from './FormAnswerCard.module.scss'

import { displayPanel, Panel, typedPanel } from 'shared/ui/panel'
import { Field } from 'shared/ui/field'
import { IllustrationMap } from '../../../ui/illustration-map/IllustrationMap.tsx'
import { IconButton } from 'shared/ui/icon-button'
import { CheckBox } from 'shared/ui/checkbox'
import { Text } from 'shared/ui/text'

import { useHandlersQuizAnswer } from '../../../lib/hooks/useHandlersQuizAnswer.tsx'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector.tsx'
import {
  quizAnswerIllustrationSelector,
  quizAnswerIsCorrectSelector,
  quizAnswerScoreSelector,
  quizAnswerSelector,
  quizAnswerUrlSelector
} from '../../../model/selectors/form-quiz-questions-selectors.ts'

import AddImageIcon from 'shared/assets/img/icons/add-image.svg?react'
import TrashIcon from 'shared/assets/img/icons/trash.svg?react'

interface IFormAnswerCardProps {
  indexQuestion: number
  indexAnswer: number
}

export const FormAnswerCard: React.FC<IFormAnswerCardProps> = React.memo(({ indexAnswer, indexQuestion }) => {
  const {
    removeAnswerHandler,
    changeQuizAnswerUrlHandler,
    changeQuizAnswerHandler,
    addIllustrationHandler,
    removeIllustrationHandler,
    toggleQuizAnswerIsCorrectHandler,
    changeQuizAnswerScore
  } = useHandlersQuizAnswer({ idAnswer: indexAnswer, idQuestion: indexQuestion })

  const answer = useAppSelector(state =>
    quizAnswerSelector(state, indexQuestion, indexAnswer))

  const url = useAppSelector(state =>
    quizAnswerUrlSelector(state, indexQuestion, indexAnswer))

  const isCorrect = useAppSelector(state =>
    quizAnswerIsCorrectSelector(state, indexQuestion, indexAnswer))

  const illustrations = useAppSelector(state =>
    quizAnswerIllustrationSelector(state, indexQuestion, indexAnswer))

  const score = useAppSelector(state =>
    quizAnswerScoreSelector(state, indexQuestion, indexAnswer))

  return (
      <Panel className={style.answer_card} typed={typedPanel.ROUNDED} display={displayPanel.GRID}>
          <div className={style.checked}>
              <CheckBox checked={isCorrect} onChange={toggleQuizAnswerIsCorrectHandler} className={style.checkbox}/>
              <Text fontSize={14} color='#fff'>верный ответ?</Text>
              <Field onChange={changeQuizAnswerScore} value={score} className={style.score} isBox={true} type={'number'} color="#ffffff"/>
              <Text fontSize={14} color='#fff'>Баллы за ответ</Text>
          </div>

          <Field
				onChange={changeQuizAnswerHandler} value={answer}
				placeholder='ответ'
				multiline={true}
				color='#ffffff' placeholderColorScheme={'light'}
				className={style.answer}
				type='text'/>

          <div className={style.block_added_img}>
              <Field
					onChange={changeQuizAnswerUrlHandler} value={url}
					color='#ffffff' placeholderColorScheme='light'
					className={style.url}
					type='text' placeholder='url'/>
              <IconButton className={style.add_image} onClick={addIllustrationHandler} color='#fff' Icon={AddImageIcon}/>
          </div>

          <IllustrationMap color='#fff' illustrations={illustrations ?? []} onDeleted={removeIllustrationHandler}/>

          <IconButton className={style.deleted} color='red' onClick={removeAnswerHandler} Icon={TrashIcon}/>
      </Panel>
  )
})
