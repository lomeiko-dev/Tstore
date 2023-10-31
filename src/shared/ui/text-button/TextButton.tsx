import React, { useState } from 'react'
import style from './TextButton.module.scss'
import classNames from 'classnames'
import { Spinner } from 'shared/ui/spinner'

export enum typedButton {
  BACK = 'back',
  DEFAULT = 'default',
  NONE = 'none',
}

type IButtonProps = {
  children?: React.ReactNode
  className?: string
  typed?: typedButton
  disabled?: boolean
  fontSize?: number
  bgColor?: string
  color?: string
  border?: string
  borderRadius?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const TextButton: React.FC<IButtonProps> = props => {
  const {
    children,
    className,
    typed,
    disabled,
    fontSize = 16,
    bgColor,
    color,
    border,
    borderRadius,
    ...otherProps
  } = props

  const [isHover, setHover] = useState(false)

  return (
      <button
			onMouseEnter={() => {
			  setHover(true)
			}} onMouseLeave={() => {
			  setHover(false)
			}}
			disabled={disabled}
			className={classNames(style.button, className, (typed != null) && style[typed])}
			style={{
			  fontSize: fontSize + 'px',
			  color: bgColor === undefined
			    ? isHover ? `${color}80` : color
			    : color,
			  backgroundColor: isHover ? `${bgColor}80` : bgColor,
			  border,
			  borderRadius
			}}
			{...otherProps}>{ disabled
			  ? <Spinner/>
			  : children}
      </button>
  )
}
