import { useEffect, useState } from 'react'
import style from './MainPage.module.scss'

import {
  errorSelector,
  isLoadingSelector,
  quizReducer,
  quizzesSelector,
  totalCountSelector,
  uploadQuizThunk
} from 'entities/quiz'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector.tsx'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'

import { Page } from 'shared/ui/page'
import { Link } from 'shared/ui/link'
import { styledText, Text } from 'shared/ui/text'
import { type IReducer, ReducerLoader } from 'shared/ui/reducer-loader'
import { QuizList } from './quiz-list/QuizList.tsx'

import { pathRoutes } from 'shared/config/routes'
import AddTestIcon from 'shared/assets/img/icons/add-test.svg?react'

const reducers: IReducer[] = [{ storeKey: 'quizReducer', reducer: quizReducer, save: true }]

const MainPage = () => {
  const dispatch = useAppDispatch()

  const quizzes = useAppSelector(quizzesSelector)
  const totalCount = useAppSelector(totalCountSelector)
  const isLoading = useAppSelector(isLoadingSelector)
  const error = useAppSelector(errorSelector)

  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    if (fetching) {
      dispatch(uploadQuizThunk()).finally(() => {
        setFetching(false)
      })
    }
  }, [fetching])

  const fetchingData = () => {
    const count = quizzes?.length ?? 0

    if (count === Number(totalCount))
      return

    setFetching(true)
  }

  return (
      <ReducerLoader reducers={reducers}>
          <Page dynamicPagination={{
            onScrollEnd: fetchingData,
            totalCount: totalCount,
            dataLength: quizzes?.length ?? 0
          }}>
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
