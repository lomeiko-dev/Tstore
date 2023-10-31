import { lazy } from 'react'

export const UsersPageLazy = lazy(async () => await import('./ui/UsersPage.tsx'))
