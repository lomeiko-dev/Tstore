import style from './Field.module.scss'
import React, { type CSSProperties, type HTMLAttributes } from 'react'
import classNames from 'classnames'

export enum enumDesign {
  LINE = 'line',
  BOX = 'box',
  NONE = 'none',
}

type IFiledProps = {
  className?: string
  type: 'text' | 'number' | 'email' | 'password' | 'date' | 'search'
  placeholderColorScheme?: 'light' | 'dark' | 'theme'
  color?: string
  bgColor?: string
  isBox?: boolean
  value?: string | number
  center?: boolean
  design?: enumDesign
  borderRadius?: string
  multiline?: boolean
} & HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>

export const Field: React.FC<IFiledProps> = props => {
  const {
    className,
    type,
    value,
    isBox = false,
    placeholderColorScheme = 'dark',
    color = '#333333',
    bgColor,
    multiline = false,
    design = enumDesign.NONE,
    center = false,
    borderRadius,
    ...otherProps
  } = props

  const styles: CSSProperties = {
    color,
    border: isBox ? `1px solid ${color}` : 'none',
    borderBottom: `1px solid ${color}`,
    backgroundColor: bgColor,
    borderRadius
  }

  const mods = { [style.centered]: center }
  return (
      <>
          {multiline
			  ? <textarea
					{...otherProps}
					style={design === enumDesign.NONE ? styles : {}}
					className={classNames(style.field, className, mods, style[placeholderColorScheme], style[design])}
					value={value}/>
			  : <input
					{...otherProps}
					style={design === enumDesign.NONE ? styles : {}}
					className={classNames(style.field, className, mods, style[placeholderColorScheme], style[design])}
					type={type} value={value}/>}
      </>

  )
}
