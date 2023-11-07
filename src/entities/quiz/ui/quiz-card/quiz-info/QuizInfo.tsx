import React, { useCallback } from 'react'
import style from './QuizInfo.module.scss'

import { Image, imageStyle } from 'shared/ui/image'
import { styledText, Text } from 'shared/ui/text'
import { TextButton, typedButton } from 'shared/ui/text-button'

import { useNavigate } from 'react-router-dom'

import { IQuizCardProps } from 'entities/quiz'
import { pathRoutes } from 'shared/config/routes'

export const QuizInfo: React.FC<IQuizCardProps> = React.memo((props) => {
  const {
    tags,
    theme,
    name,
    description,
    icon,
    id
  } = props

  const navigate = useNavigate()

  const startQuizHandler = useCallback(() => {
    navigate(pathRoutes.quiz.name + `/${id}`)
  }, [navigate])

  return (
      <div className={style.info}>
          <Image className={style.icon} alt='icon quiz' src={icon} styled={imageStyle.RECTANGLE}/>
          <Text className={style.name} styled={styledText.TITLE}>{name}</Text>
          <Text styled={styledText.DESCRIPTION}>{theme}</Text>
          <Text className={style.description} styled={styledText.SUBTITLE}>{description}</Text>
          <Text className={style.tags} styled={styledText.DESCRIPTION}>{tags}</Text>

          <TextButton onClick={startQuizHandler} className={style.btn} typed={typedButton.DEFAULT}>Старт</TextButton>
      </div>
  )
})
