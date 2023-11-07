import React from 'react'
import style from './ResultCard.module.scss'

import { displayPanel, Panel, styledPanel, typedPanel } from 'shared/ui/panel'
import { styledText, Text } from 'shared/ui/text'

import { IResultProps } from '../types/result-props.ts'

export const ResultCard: React.FC<IResultProps> = (props) => {
  const {
    value_not_correct_answer,
    percent_passing,
    scores,
    value_correct_answer,
    nameTest
  } = props

  return (
      <Panel className={style.card} styled={styledPanel.SHADOW_PANEL} typed={typedPanel.ROUNDED} display={displayPanel.ROW}>
          <div className={style.title}>
              <Text className={style.text} styled={styledText.SUBTITLE}>{nameTest}:</Text>
              <Text className={style.text} styled={styledText.SUBTITLE} color='green'>пройден</Text>
          </div>
          <div className={style.percent_passing}>
              <Text className={style.text} styled={styledText.TEXT}>пройден на:</Text>
              <Text className={style.text} styled={styledText.TEXT}>{percent_passing}%</Text>
          </div>
          <div className={style.answers_info}>
              <Text className={style.text} color='green' styled={styledText.TEXT}>правильных ответов:</Text>
              <Text className={style.text} color='green' styled={styledText.TEXT}>{value_correct_answer}</Text>

              <Text className={style.text} color='red' styled={styledText.TEXT}>неправильных ответов:</Text>
              <Text className={style.text} color='red' styled={styledText.TEXT}>{value_not_correct_answer}</Text>
          </div>
          <Text className={style.text}>{scores} балл/ов</Text>
      </Panel>
  )
}
