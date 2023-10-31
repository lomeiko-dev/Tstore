import React, { type MutableRefObject, useRef } from 'react'
import style from './Page.module.scss'
import classNames from 'classnames'
import { usePagination } from 'shared/lib/hooks/usePagination.tsx'

interface IPageProps {
  children: React.ReactNode
  className?: string
  onScrollEnd?: () => void
}

export const Page: React.FC<IPageProps> = ({ children, className, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  usePagination({
    callback: onScrollEnd,
    wrapperRef,
    triggerRef
  })

  return (
      <div className={classNames(style.page, className)} ref={wrapperRef}>
          {children}
          <div className={style.trigger} ref={triggerRef}/>
      </div>
  )
}
