import React, { useCallback, useState } from 'react'
import style from './FormSearchedUsers.module.scss'

import { enumDesign, Field } from 'shared/ui/field'
import { updateSortQuery, usersReset } from 'entities/user'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'
import { IconButton } from 'shared/ui/icon-button'

import SearchedIcon from 'shared/assets/img/icons/search.svg?react'
import ResetIcon from 'shared/assets/img/icons/reset.svg?react'

export const FormSearchedUser = () => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState('')

  const updateSearchField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const toggleSearched = useCallback(() => {
    dispatch(usersReset())
    dispatch(updateSortQuery(`nickname_like=${search}&`))
  }, [search, dispatch])

  const resetSearched = useCallback(() => {
    dispatch(usersReset())
    setSearch('')
  }, [dispatch, setSearch])

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
}
