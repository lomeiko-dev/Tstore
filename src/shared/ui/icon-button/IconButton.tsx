import style from './IconButton.module.scss'
import React from 'react'
import classNames from 'classnames'

type IIconButtonProps = {
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  className?: string
  bgColor?: string
  color?: string
  defaultStyle?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const IconButton: React.FC<IIconButtonProps> = props => {
  const {
    Icon,
    bgColor,
    color,
    className,
    defaultStyle,
    ...otherProps
  } = props

  return (
      <button
			style={{
			  backgroundColor: bgColor
			}}
			{...otherProps}
			className={classNames(style.button, className, defaultStyle && style.default_btn)}>
          <Icon style={{
			  color
          }}
			className={classNames(style.icon)}/>
      </button>
  )
}
