import { type RouteProps } from 'react-router-dom'
import { pathRoutes } from 'shared/config/routes'

import { MainPageLazy } from 'pages/main'
import { AboutPageLazy } from 'pages/about'
import { AuthenticatePageLazy } from 'pages/authenticate'
import { ProfilePageLazy } from 'pages/profile'
import { UsersPageLazy } from 'pages/users'

import { AppLayout } from 'widgets/app-layout'
import { DefaultLayout } from 'widgets/default-layout'
import { NotFoundLazy } from 'pages/not-found'
import { ConstructorQuizPageLazy } from 'pages/constructor-quiz'
import { QuizPageLazy } from 'pages/quiz'

type appRouteProps = { authOnly: boolean } & RouteProps

export const Routes: appRouteProps[] = [
  {
    path: '/',
    element: (<AppLayout> <MainPageLazy/> </AppLayout>),
    authOnly: true
  },
  {
    path: pathRoutes.main.config,
    element: (<AppLayout> <MainPageLazy/> </AppLayout>),
    authOnly: true
  },
  {
    path: pathRoutes.about.config,
    element: (<AppLayout> <AboutPageLazy/> </AppLayout>),
    authOnly: true
  },
  {
    path: pathRoutes.auth.config,
    element: (<DefaultLayout> <AuthenticatePageLazy/> </DefaultLayout>),
    authOnly: false
  },
  {
    path: pathRoutes.profile.config,
    element: (<AppLayout> <ProfilePageLazy/> </AppLayout>),
    authOnly: true

  },
  {
    path: pathRoutes.users.config,
    element: (<AppLayout> <UsersPageLazy/> </AppLayout>),
    authOnly: true
  },
  {
    path: pathRoutes.constructor_quiz.config,
    element: (<AppLayout> <ConstructorQuizPageLazy/> </AppLayout>),
    authOnly: true
  },
  {
    path: pathRoutes.quiz.config,
    element: (<AppLayout> <QuizPageLazy/> </AppLayout>),
    authOnly: true
  },
  {
    path: pathRoutes.not_found.config,
    element: (<NotFoundLazy/>),
    authOnly: false
  }
]
