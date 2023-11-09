import React, { HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react'
import style from './Page.module.scss'
import classNames from 'classnames'

interface IDynamicPaginationProps {
  onScrollEnd: () => void
  dataLength: number
  totalCount: number
}

interface IPageProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  dynamicPagination?: IDynamicPaginationProps
}

export const Page: React.FC<IPageProps> = (props) => {
  const {
    children,
    className,
    dynamicPagination,
    ...otherProps
  } = props

  const pageRef = useRef<HTMLDivElement>(null)
  const [element, setElement] = useState<HTMLDivElement | undefined>(undefined)

  useEffect(() => {
    if (pageRef.current !== null)
      setElement(pageRef.current)
  }, [pageRef, element, setElement])

  const scrollHandler = useCallback(() => {
    if (dynamicPagination && element) {
      const { scrollHeight, scrollTop } = element
      if (scrollHeight - (scrollTop + window.innerHeight) < 100 &&
          dynamicPagination.dataLength < dynamicPagination.totalCount)
        dynamicPagination.onScrollEnd()
    }
  }, [dynamicPagination])

  return (
      <div ref={pageRef} {...otherProps} className={classNames(style.page, className)} onScroll={scrollHandler}>
          {children}
      </div>
  )
}
