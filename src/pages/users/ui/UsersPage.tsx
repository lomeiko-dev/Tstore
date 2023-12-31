import { useEffect } from 'react'

import { UserList } from './user-list/UserList.tsx'
import { FormSearched } from 'features/searched-sorting'
import { type IReducer, ReducerLoader } from 'shared/ui/reducer-loader'
import { Page } from 'shared/ui/page'

import {
  errorSelector,
  isLoadingSelector,
  sortQuerySelector,
  totalCountSelector, updateSortQuery,
  uploadUsersThunk,
  userReducer, usersReset,
  usersSelector
} from 'entities/user'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector.tsx'

const reducers: IReducer[] = [
  { storeKey: 'userReducer', reducer: userReducer, save: false }
]

const UsersPage = () => {
  const dispatch = useAppDispatch()

  const users = useAppSelector(usersSelector)
  const isLoading = useAppSelector(isLoadingSelector)
  const error = useAppSelector(errorSelector)
  const totalCount = useAppSelector(totalCountSelector)

  const sortQuery = useAppSelector(sortQuerySelector)

  const uploadUsers = () => {
    dispatch(uploadUsersThunk())
  }

  useEffect(() => {
    uploadUsers()
  }, [sortQuery])

  return (
      <ReducerLoader reducers={reducers}>
          <Page>
              <FormSearched
                  reset={() => dispatch(usersReset())}
                  updateSortQuery={(value) => dispatch(updateSortQuery(`nickname_like=${value}&`))}/>
              <UserList
					isLoading={isLoading} error={error}
					data={users} totalCount={totalCount}
					showMoreHandler={uploadUsers}/>
          </Page>
      </ReducerLoader>
  )
}

export default UsersPage
