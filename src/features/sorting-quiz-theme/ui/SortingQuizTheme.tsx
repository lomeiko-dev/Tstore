import { useCallback, useEffect } from 'react'
import style from './SortingQuizTheme.module.scss'

import { useAppSelector } from 'shared/lib/hooks/useAppSelector.tsx'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'
import { isAllThemesSelector, themesSelector } from '../model/selectors/sorting-quiz-theme-selectors.ts'

import { TextButton, typedButton } from 'shared/ui/text-button'
import { uploadQuizThemeThunk } from '../model/services/upload-quiz-theme-thunk.ts'
import { resetSorting, updateSortQuery } from 'entities/quiz'

export const SortingQuizTheme = () => {
  const dispatch = useAppDispatch()
  const themes = useAppSelector(themesSelector)
  const isAllThemes = useAppSelector(isAllThemesSelector)

  const uploadNewTheme = useCallback(() => {
    dispatch(uploadQuizThemeThunk())
  }, [dispatch])

  useEffect(() => {
    uploadNewTheme()
  }, [])

  const setFilterHandler = useCallback((theme: string) => {
    dispatch(resetSorting())
    dispatch(updateSortQuery(`theme_like=${theme}&`))
  }, [dispatch])

  return (
      <div className={style.sorting}>
          {themes.map(theme =>
              <TextButton onClick={() => setFilterHandler(theme)} className={style.btn} key={theme} typed={typedButton.DEFAULT}>{theme}</TextButton>)}
          {!isAllThemes && <TextButton onClick={uploadNewTheme} className={style.btn} typed={typedButton.DEFAULT}>...</TextButton>}
      </div>
  )
}
