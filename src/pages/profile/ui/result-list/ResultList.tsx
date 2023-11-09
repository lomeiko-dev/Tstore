import React from 'react'
import style from './ResultList.module.scss'
import { IResultQuiz, ResultCard } from 'entities/result-quiz'

interface IResultListProps {
  results: IResultQuiz[]
}

export const ResultList: React.FC<IResultListProps> = (props) => {
  const {
    results
  } = props

  return (
      <div className={style.list}>
          {results.map((result, index) => <ResultCard key={index} {...result}/>)}
      </div>
  )
}
