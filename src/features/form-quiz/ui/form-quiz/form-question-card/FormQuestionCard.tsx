import React, { useCallback, useState } from 'react'
import style from './FormQuestionCard.module.scss'

import { Panel, styledPanel, typedPanel } from 'shared/ui/panel'
import { IconButton } from 'shared/ui/icon-button'
import { enumDesign, Field } from 'shared/ui/field'
import { TextButton, typedButton } from 'shared/ui/text-button'
import { FormAnswerCard } from '../form-answer-card/FormAnswerCard.tsx'
import { IllustrationMap } from '../../illustration-map/IllustrationMap.tsx'

import { useTheme } from 'shared/lib/hooks/useTheme.tsx'
import { useHandlersQuizAnswer } from '../../../lib/hooks/useHandlersQuizAnswer.tsx'
import { useHandlersQuizQuestion } from '../../../lib/hooks/useHandlersQuizQuestion.tsx'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector.tsx'
import {
  quizQuestionAnswersSelector,
  quizQuestionIllustrationSelector,
  quizQuestionSelector,
  quizQuestionUrlSelector
} from '../../../model/selectors/form-quiz-questions-selectors.ts'

import AddImageIcon from 'shared/assets/img/icons/add-image.svg?react'
import TrashIcon from 'shared/assets/img/icons/trash.svg?react'

interface IFormQuestionCardProps {
  indexQuestion: number
}

export const FormQuestionCard: React.FC<IFormQuestionCardProps> = React.memo(({ indexQuestion }) => {
  const dispatch = useAppDispatch()
  const { theme } = useTheme()

  const question = useAppSelector(state =>
    quizQuestionSelector(state, indexQuestion))

  const illustrations = useAppSelector(state =>
    quizQuestionIllustrationSelector(state, indexQuestion))

  const url = useAppSelector(state =>
    quizQuestionUrlSelector(state, indexQuestion))

  const answers = useAppSelector(state =>
    quizQuestionAnswersSelector(state, indexQuestion))

  const {
    updateQuizQuestionHandler,
    updateQuizQuestionUrlHandler,
    removeIllustrationHandler,
    addIllustrationHandler,
    removeQuestionHandle
  } = useHandlersQuizQuestion({ id: indexQuestion })

  const { addAnswerHandler } = useHandlersQuizAnswer({ idQuestion: indexQuestion, idAnswer: 0 })

  const [isDeleted, setDeleted] = useState(false)

  const deleteQuestionHandle = useCallback(() => {
    setDeleted(true)
    setTimeout(() => {
      removeQuestionHandle()
      setDeleted(false)
    }, 500)
  }, [dispatch, isDeleted, setDeleted])

  return (
      <Panel className={isDeleted ? style.question_card_delete : style.question_card} typed={typedPanel.ROUNDED} styled={styledPanel.SHADOW_PANEL}>
          <div className={style.content}>
              <Field
					onChange={updateQuizQuestionHandler} value={question}
					design={enumDesign.BOX} placeholderColorScheme='theme'
					multiline={true}
					type='text'
					className={style.question}
					placeholder='вопрос'/>

              <div className={style.block_added_img}>
                  <Field
						onChange={updateQuizQuestionUrlHandler}
						design={enumDesign.LINE} placeholderColorScheme='theme'
						value={url}
						className={style.url}
						type='text' placeholder='url'/>
                  <IconButton className={style.add_image} onClick={addIllustrationHandler} defaultStyle={true} Icon={AddImageIcon}/>
              </div>

              <IllustrationMap color={theme === 'light' ? '#333333' : '#ffffff'} illustrations={illustrations ?? []} onDeleted={removeIllustrationHandler}/>

              <div className={style.add_answer}>
                  <TextButton
						typed={typedButton.NONE}
						onClick={addAnswerHandler}>
                      Добавить ответ
                  </TextButton>
              </div>

              {answers?.map((_, index) =>
                  <FormAnswerCard key={index} indexAnswer={index} indexQuestion={indexQuestion}/>)}

              <div className={style.deleted}>
                  <IconButton onClick={deleteQuestionHandle} color='red' Icon={TrashIcon} className={style.delete}/>
              </div>
          </div>
      </Panel>
  )
})
