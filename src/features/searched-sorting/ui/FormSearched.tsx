import React, { useCallback, useState } from 'react'
import style from './FormSearched.module.scss'

import { enumDesign, Field } from 'shared/ui/field'
import { IconButton } from 'shared/ui/icon-button'

import SearchedIcon from 'shared/assets/img/icons/search.svg?react'
import ResetIcon from 'shared/assets/img/icons/reset.svg?react'

interface IFormSearched {
  updateSortQuery: (value: string) => void
  reset: () => void
}

export const FormSearched: React.FC<IFormSearched> = React.memo((props) => {
  const {
    reset,
    updateSortQuery
  } = props

  const [search, setSearch] = useState('')

  const updateSearchField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const toggleSearched = useCallback(() => {
    if (search !== '') {
      reset()
      updateSortQuery(search)
    }
  }, [search])

  const resetSearched = useCallback(() => {
    if (search !== '') {
      reset()
      setSearch('')
    }
  }, [search])

  return (
      <div className={style.form}>
          <Field
				design={enumDesign.BOX}
				placeholderColorScheme='theme'
				value={search} onChange={updateSearchField}
				className={style.field} type='search' placeholder='имя...'/>

          <IconButton className={style.icon} defaultStyle={true} onClick={toggleSearched} Icon={SearchedIcon}/>
          <IconButton className={style.icon} onClick={resetSearched} Icon={ResetIcon}/>
      </div>
  )
})
