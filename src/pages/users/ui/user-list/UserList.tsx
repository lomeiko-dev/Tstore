import React from 'react'
import style from './UserList.module.scss'

import { useNavigate } from 'react-router-dom'

import { UserCard, UserSkeleton } from 'entities/user'
import { TextButton, typedButton } from 'shared/ui/text-button'
import { pathRoutes } from 'shared/config/routes'
import { type IProfile } from 'entities/user'
import { styledText, Text } from 'shared/ui/text'

interface IUserListProps {
  showMoreHandler: () => void
  totalCount: number
  data?: IProfile[]
  isLoading: boolean
  error?: string
}

const SkeletonContainer: React.ReactNode = (
    <>
        <UserSkeleton/>
        <UserSkeleton/>
        <UserSkeleton/>
    </>
)

export const UserList: React.FC<IUserListProps> = React.memo(props => {
  const {
    data,
    totalCount,
    isLoading,
    error,
    showMoreHandler
  } = props

  let result: React.ReactNode
  const navigate = useNavigate()
  const navigateProfileHandler = (userId: string) => {
    navigate(pathRoutes.profile.name + `/${userId}`)
  }

  if (isLoading) {
    result = SkeletonContainer
  }

  if (error !== undefined) {
    result = <Text styled={styledText.ERROR}>{error}</Text>
  }

  if (data === undefined) {
    return
  }

  return (
      <div className={style.list}>
          {data.map(user =>
              <UserCard key={user.id} data={user} onShowUser={() => {
				  navigateProfileHandler(user.authId)
              }}/>)}

          {result}

          {data.length < totalCount &&
          <TextButton onClick={showMoreHandler} typed={typedButton.DEFAULT}>Показать ещё</TextButton>}
      </div>
  )
})
