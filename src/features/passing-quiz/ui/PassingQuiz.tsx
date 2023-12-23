import React, { useCallback, useEffect, useState } from 'react'
import style from './PassingQuiz.module.scss'

import { IQuizQuestion, quizDetailsSelector } from 'entities/quiz'
import { displayPanel, Panel, styledPanel, typedPanel } from 'shared/ui/panel'
import { QuestionQuiz } from './question-quiz/QuestionQuiz.tsx'
import { IconButton } from 'shared/ui/icon-button'

import BackIcon from 'shared/assets/img/icons/back.svg?react'
import ArrowLeft from 'shared/assets/img/icons/arrow-left.svg?react'
import ArrowRight from 'shared/assets/img/icons/arrow-right.svg?react'

import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector.tsx'
import { indexQuestionSelector, questionResultSelector } from '../model/selectors/passing-quiz-selector.ts'
import { decrementIndexQuestion, incrementIndexQuestion, initQuestion } from '../model/slice/passing-quiz-slice.ts'

import { compareAnswers } from '../lib/compareAnswers.ts'
import { createResultQuizThunk, errorSelector, IResultQuiz, isLoadingSelector, ResultInfo } from 'entities/result-quiz'

import { pathRoutes } from 'shared/config/routes'
import { Modal } from 'shared/ui/modal'
import { TextButton, typedButton } from 'shared/ui/text-button'
import { styledText, Text } from 'shared/ui/text'
import { Loader } from 'shared/ui/loader'

interface IPassingQuizProps {
  questions?: IQuizQuestion[]
  isLoading: boolean
  error?: string
}

export const PassingQuiz: React.FC<IPassingQuizProps> = React.memo((props) => {
  const {
    questions = [],
    error,
    isLoading
  } = props

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const indexQuestion = useAppSelector(indexQuestionSelector)
  const questionResult = useAppSelector(questionResultSelector)
  const quizName = useAppSelector(quizDetailsSelector)?.name

  const errorResult = useAppSelector(errorSelector)
  const isLoadingResult = useAppSelector(isLoadingSelector)

  const [showModal, setShowModal] = useState(false)
  const [contentModal, setContentModal] = useState<IResultQuiz>({
    percent_passing: 0,
    value_correct_answer: 0,
    value_not_correct_answer: 0,
    scores: 0,
    id_user: '',
    nameTest: '',
    answers: [],
    questions: [] 
  })

  useEffect(() => {
    dispatch(initQuestion(questions))
  }, [dispatch, questions])

  const nextQuestion = useCallback(() => {
    if (indexQuestion === questions.length - 1) {
      const result = compareAnswers({ questions: questions, questionAnswers: questionResult, nameTest: quizName ?? 'Не известно' })

      if (result.result) {
        setContentModal(result.result)
        setShowModal(true)
        dispatch(createResultQuizThunk(result.result))
      }
    }

    dispatch(incrementIndexQuestion())
  }, [dispatch, questions, questionResult, indexQuestion])

  const previousQuestion = useCallback(() => {
    if (indexQuestion !== 0) {
      dispatch(decrementIndexQuestion())
    }
  }, [dispatch, indexQuestion])

  const backHandler = useCallback(() => {
    setShowModal(false)
    navigate(pathRoutes.main.name)
  }, [navigate])

  if (isLoading || questions === undefined) {
    return <Loader/>
  }

  if (error) {
    return <div className={style.error_block}>
        <Text styled={styledText.ERROR}>{error}</Text>
        <TextButton onClick={() => navigate(pathRoutes.main.name)} typed={typedButton.DEFAULT}>На главную</TextButton>
    </div>
  }

  return (
      <div className={style.form}>
          <QuestionQuiz {...questions[indexQuestion]}/>

          <Panel className={style.block_management} display={displayPanel.ROW} styled={styledPanel.SHADOW_PANEL} typed={typedPanel.ROUNDED}>
              <IconButton onClick={backHandler} className={style.back} Icon={BackIcon}/>
              <IconButton onClick={previousQuestion} className={style.arrow} Icon={ArrowLeft}/>
              <IconButton onClick={nextQuestion} className={style.arrow} Icon={ArrowRight}/>
          </Panel>

          <Modal onClosed={backHandler} isShow={showModal}>
              <ResultInfo isLoading={isLoadingResult} error={errorResult} {...contentModal}/>
              <TextButton className={style.btn} typed={typedButton.DEFAULT} onClick={backHandler}>На главную</TextButton>
          </Modal>
      </div>)
})
