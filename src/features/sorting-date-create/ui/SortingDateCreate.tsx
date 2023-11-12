import style from './SortingDateCreate.module.scss'
import React, { useCallback } from 'react'
import { TextButton, typedButton } from 'shared/ui/text-button'

interface ISortingDateCreateProps {
  reset: () => void
  updateSortingQuery: () => void
}

export const SortingDateCreate: React.FC<ISortingDateCreateProps> = (props) => {
  const {
    reset,
    updateSortingQuery
  } = props

  const toggleSorting = useCallback(() => {
    reset()
    updateSortingQuery()
  }, [])

  return (
      <div className={style.sorting}>
          <TextButton className={style.btn} onClick={toggleSorting} typed={typedButton.DEFAULT}>Сначала старые</TextButton>
          <TextButton className={style.btn} onClick={reset} typed={typedButton.BACK}>сбросить</TextButton>
      </div>
  )
}
