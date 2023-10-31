import style from './CheckBox.module.scss'
import React from 'react'
import classNames from 'classnames'

type ICheckBoxProps = {
  className?: string
  color?: string
  checked?: boolean
} & React.ButtonHTMLAttributes<HTMLInputElement>

export const CheckBox: React.FC<ICheckBoxProps> = props => {
  const {
    className,
    color,
    checked,
    ...otherProps
  } = props

  return (
      <input checked={checked} className={classNames(style.checkbox, className)} type={'checkbox'} {...otherProps}/>
  )
}
