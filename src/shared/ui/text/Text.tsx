import style from './Text.module.scss'
import * as React from 'react'
import classNames from 'classnames'

export enum styledText {
  NAMESPACE = 'namespace',
  TITLE = 'title',
  SUBTITLE = 'sub_title',
  DESCRIPTION = 'description',
  TEXT = 'text',
  ERROR = 'error',
  WARNING = 'warning',
}

interface ITextProps {
  children: React.ReactNode
  className?: string
  styled?: styledText
  color?: string
  fontSize?: number
  fontWeight?: number
}

export const Text: React.FC<ITextProps> = props => {
  const {
    children,
    className,
    styled,
    color,
    fontWeight,
    fontSize
  } = props

  return (
      <div style={{
		  color,
		  fontWeight,
		  fontSize: `${fontSize}px`
      }}
		className={classNames(style.text_cls, className, (styled != null) && style[styled])}>
          {children}
      </div>
  )
}
