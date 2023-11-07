import style from './FormQuiz.module.scss'

import { useAppSelector } from 'shared/lib/hooks/useAppSelector.tsx'
import { useHandlersQuiz } from '../../lib/hooks/useHandlersQuiz.tsx'
import { useHandlersQuizQuestion } from '../../lib/hooks/useHandlersQuizQuestion.tsx'

import { quizQuestionsSelectors } from '../../model/selectors/form-quiz-questions-selectors.ts'
import { errorsSelector, isLoadingSelector } from '../../model/selectors/form-quiz-selectors.ts'

import { TextButton, typedButton } from 'shared/ui/text-button'
import { IconButton } from 'shared/ui/icon-button'
import { styledText, Text } from 'shared/ui/text'
import { FormQuizTitle } from './form-quiz-title/FormQuizTitle.tsx'
import { FormQuestionCard } from './form-question-card/FormQuestionCard.tsx'
import { displayPanel, Panel, styledPanel, typedPanel } from 'shared/ui/panel'

import BackIcon from 'shared/assets/img/icons/back.svg?react'
import AddQuestionIcon from 'shared/assets/img/icons/add-question.svg?react'
import React from 'react'

export const FormQuiz = React.memo(() => {
  const questions = useAppSelector(quizQuestionsSelectors)
  const { addQuestionHandle } = useHandlersQuizQuestion({ id: 0 })
  const { createQuizHandler, backHandler } = useHandlersQuiz()
  const isLoading = useAppSelector(isLoadingSelector)
  const errors = useAppSelector(errorsSelector)

  return (
      <>
          <div className={style.form}>
              <div className={style.error_block}>
                  {errors.map((item, index) =>
                      <Text key={index} styled={styledText.ERROR}>{item}</Text>)}
              </div>
              <FormQuizTitle/>

              {questions?.map((_, index) =>
                  <FormQuestionCard key={index} indexQuestion={index}/>)}
          </div>
          <Panel display={displayPanel.ROW} typed={typedPanel.ROUNDED} styled={styledPanel.SHADOW_PANEL} className={style.block_management}>
              <IconButton
					defaultStyle={true}
					onClick={backHandler}
					Icon={BackIcon}
					className={style.icon}/>
              <IconButton
					defaultStyle={true}
					onClick={addQuestionHandle}
					Icon={AddQuestionIcon}
					className={style.icon}/>
              <TextButton
					typed={typedButton.NONE} fontSize={15}
					disabled={isLoading} onClick={() => {
					  createQuizHandler(questions ?? [])
					}}>Создать</TextButton>
          </Panel>
      </>
  )
})
