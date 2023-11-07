import React, { useState } from 'react'
import style from './QuizCard.module.scss'

import { type IQuiz } from '../../model/types/quiz-scheme.ts'

import { Panel, styledPanel, typedPanel } from 'shared/ui/panel'
import { Image, imageStyle } from 'shared/ui/image'
import { styledText, Text } from 'shared/ui/text'
import { TextButton, typedButton } from 'shared/ui/text-button'

import { Modal } from 'shared/ui/modal'
import { QuizInfo } from 'entities/quiz/ui/quiz-card/quiz-info/QuizInfo.tsx'

export interface IQuizCardProps extends Omit<IQuiz, 'questions' | 'id_user'> {}

export const QuizCard: React.FC<IQuizCardProps> = React.memo(props => {
  const {
    tags,
    theme,
    name,
    description,
    icon
  } = props

  const [show, setShow] = useState(false)

  return (
      <Panel className={style.card} styled={styledPanel.SHADOW_PANEL} typed={typedPanel.ROUNDED}>
          <Image className={style.icon} alt='icon quiz' src={icon} styled={imageStyle.RECTANGLE}/>
          <Text className={style.name} styled={styledText.TITLE}>{name}</Text>
          <Text styled={styledText.DESCRIPTION}>{theme}</Text>
          <Text className={style.description} styled={styledText.SUBTITLE}>{description}</Text>
          <Text className={style.tags} styled={styledText.DESCRIPTION}>{tags}</Text>

          <TextButton className={style.btn} typed={typedButton.DEFAULT} onClick={() => setShow(true)}>Перейти</TextButton>

          <Modal onClosed={() => setShow(false)} isShow={show}>
              <QuizInfo {...props}/>
          </Modal>
      </Panel>
  )
})
