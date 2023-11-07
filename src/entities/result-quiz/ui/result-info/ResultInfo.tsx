import React from 'react'
import style from './ResultInfo.module.scss'
import { styledText, Text } from 'shared/ui/text'

import { IResultProps } from '../types/result-props.ts'
import { Loader } from 'shared/ui/loader'

interface IResultInfoProps extends IResultProps {
  isLoading: boolean
  error?: string
}

export const ResultInfo: React.FC<IResultInfoProps> = (props) => {
  const {
    nameTest,
    percent_passing,
    scores,
    value_correct_answer,
    value_not_correct_answer,
    isLoading,
    error
  } = props

  if (error) {
    return <div className={style.info}>
        <Text styled={styledText.ERROR}>{error}</Text>
    </div>
  }

  if (isLoading) {
    return <div className={style.info}>
        <Loader/>
    </div>
  }

  return (
      <div className={style.info}>
          <Text className={style.text} styled={styledText.TITLE} color='green'>тест: {nameTest} - Пройден!</Text>
          <Text className={style.text} styled={styledText.TEXT}>пройден на: {percent_passing}%</Text>
          <div className={style.answers_info}>
              <Text className={style.text} color='green' styled={styledText.TEXT}>правильных ответов:</Text>
              <Text className={style.text} color='green' styled={styledText.TEXT}>{value_correct_answer}</Text>
          </div>
          <div className={style.answers_info}>
              <Text className={style.text} color='red' styled={styledText.TEXT}>неправильных ответов:</Text>
              <Text className={style.text} color='red' styled={styledText.TEXT}>{value_not_correct_answer}</Text>
          </div>
          <Text className={style.text}>{scores} балл/ов</Text>
      </div>
  )
}
