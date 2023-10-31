import * as React from 'react'
import style from './Link.module.scss'

import { type LinkProps } from 'react-router-dom'
import { Link as ReactLink } from 'react-router-dom'
import classNames from 'classnames'

type ILinkProps = {
  children: React.ReactNode
  className?: string
} & LinkProps

export const Link: React.FC<ILinkProps> = props => {
  const {
    children,
    className,
    ...otherProps
  } = props

  return (
      <ReactLink {...otherProps} className={classNames(style.link, className)}>
          {children}
      </ReactLink>
  )
}
