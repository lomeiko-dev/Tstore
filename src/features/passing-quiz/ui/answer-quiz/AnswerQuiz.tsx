import React from 'react'
import style from './AnswerQuiz.module.scss'

import { Panel, styledPanel, typedPanel } from 'shared/ui/panel'
import { styledText, Text } from 'shared/ui/text'
import { CheckBox } from 'shared/ui/checkbox'
import { Image, imageStyle } from 'shared/ui/image'

import { IAnswer } from 'entities/quiz'

interface IAnswerQuizProps extends Omit<IAnswer, 'url' | 'isCorrect' | 'score'> {
  onChecked: () => void
  checked: boolean
}

export const AnswerQuiz: React.FC<IAnswerQuizProps> = (props) => {
  const {
    answer,
    checked,
    onChecked,
    illustrations
  } = props

  return (
      <Panel className={style.card} styled={styledPanel.SHADOW_PANEL} typed={typedPanel.ROUNDED}>
          <div className={style.title}>
              <Text color="#fff" styled={styledText.SUBTITLE}>{answer}</Text>
              <CheckBox checked={checked} onChange={onChecked} className={style.checkbox}/>
          </div>
          {illustrations &&
              <div className={style.illustrations}>
                  {illustrations.map(image =>
                      <Image
                          key={image}
                          className={style.image}
                          styled={imageStyle.RECTANGLE}
                          alt="illustrations" src={image}/>)}
              </div>}
      </Panel>
  )
}
