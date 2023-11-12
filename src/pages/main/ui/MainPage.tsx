import { useCallback, useEffect, useState } from 'react'
import style from './MainPage.module.scss'

import {
  errorSelector,
  isLoadingSelector,
  quizReducer,
  quizzesSelector, resetSorting,
  totalCountSelector, updateSortQuery,
  uploadQuizThunk
  , sortQuerySelector 
} from 'entities/quiz'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector.tsx'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'

import { Page } from 'shared/ui/page'
import { Link } from 'shared/ui/link'
import { styledText, Text } from 'shared/ui/text'
import { type IReducer, ReducerLoader } from 'shared/ui/reducer-loader'
import { QuizList } from './quiz-list/QuizList.tsx'
import { FormSearched } from 'features/searched-sorting'

import { pathRoutes } from 'shared/config/routes'
import AddTestIcon from 'shared/assets/img/icons/add-test.svg?react'
import { SortingDateCreate } from 'features/sorting-date-create'
import { SortingQuizTheme, sortingQuizThemeReducer } from 'features/sorting-quiz-theme'

const reducers: IReducer[] = [
  { storeKey: 'quizReducer', reducer: quizReducer, save: true },
  { storeKey: 'sortingQuizThemeReducer', reducer: sortingQuizThemeReducer, save: true }
]

const MainPage = () => {
  const dispatch = useAppDispatch()

  const quizzes = useAppSelector(quizzesSelector)
  const sortQuery = useAppSelector(sortQuerySelector)
  const totalCount = useAppSelector(totalCountSelector)
  const isLoading = useAppSelector(isLoadingSelector)
  const error = useAppSelector(errorSelector)

  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    setFetching(true)
  }, [sortQuery])

  useEffect(() => {
    if (fetching) {
      dispatch(uploadQuizThunk()).finally(() => {
        setFetching(false)
      })
    }
  }, [fetching, sortQuery])

  const fetchingData = () => {
    const count = quizzes?.length ?? 0

    if (count === Number(totalCount))
      return

    setFetching(true)
  }

  const resetHandler = useCallback(() => {
    dispatch(resetSorting())
    setFetching(true)
  }, [dispatch])

  return (
      <ReducerLoader reducers={reducers}>
          <Page dynamicPagination={{
            onScrollEnd: fetchingData,
            totalCount: totalCount,
            dataLength: quizzes?.length ?? 0
          }}>
              <FormSearched
                  updateSortQuery={(value) => dispatch(updateSortQuery(`name_like=${value}&`))}
                  reset={resetHandler}/>
              <SortingDateCreate
                  reset={resetHandler}
                  updateSortingQuery={() => dispatch(updateSortQuery('_sort=dateCreate&'))}/>
              <SortingQuizTheme/>
              <Link className={style.link_constructor} to={pathRoutes.constructor_quiz.name}>
                  <AddTestIcon className={style.icon}/>
              </Link>
              {quizzes?.length === 0 
                ? <Text className={style.text_test_null} styled={styledText.TITLE}>Тестов нет</Text> 
                : <QuizList isLoading={isLoading} error={error} data={quizzes}/>}
          </Page>
      </ReducerLoader>
  )
}

export default MainPage
