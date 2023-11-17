import React from 'react'
import style from './ResultList.module.scss'
import { IResultQuiz, ResultCard } from 'entities/result-quiz'
import { Loader } from 'shared/ui/loader'
import { styledText, Text } from 'shared/ui/text'

interface IResultListProps {
  results: IResultQuiz[]
  isLoading: boolean
  error?: string
}

export const ResultList: React.FC<IResultListProps> = (props) => {
  const {
    results,
    error,
    isLoading
  } = props

  let result: React.ReactNode

  if (isLoading)
    result = (<div><Loader/></div>)

  if (error)
    result = (<div><Text styled={styledText.ERROR}>{error}</Text></div>)

  return (
      <div className={style.list}>
          {results.map((result, index) => <ResultCard key={index} {...result}/>)}
          {result}
      </div>
  )
}
