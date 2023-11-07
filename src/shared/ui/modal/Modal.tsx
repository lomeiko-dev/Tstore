import React, { useCallback, useEffect, useState } from 'react'
import style from './Modal.module.scss'
import classNames from 'classnames'

import { IconButton } from 'shared/ui/icon-button'
import CrossIcon from 'shared/assets/img/icons/cross.svg?react'
import { Portal } from 'shared/ui/portal'

interface IModalProps {
  className?: string
  children: React.ReactNode
  onClosed: () => void
  isShow: boolean
}

export const Modal: React.FC<IModalProps> = (props) => {
  const {
    className,
    children,
    onClosed,
    isShow
  } = props

  const [isClosed, setClosed] = useState(false)
  const [lazy, setLazy] = useState(false)

  useEffect(() => {
    setLazy(true)
  }, [])

  useEffect(() => {
    if (isShow) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isShow])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closedHandler()
    }
  }, [])

  const closedHandler = useCallback(() => {
    setClosed(true)

    setTimeout(() => {
      onClosed()
      setClosed(false)
    }, 200)
  }, [isClosed])

  const stopPropagationHandle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
  }, [])

  const mods = {
    [style.open]: isShow,
    [style.closed]: isClosed
  }

  if (!lazy && isShow) { return }

  return (
      <Portal>
          <div
            className={classNames(style.overlay, mods)}
            onClick={closedHandler}>
              <div
              className={classNames(style.modal, className)}
              onClick={stopPropagationHandle}>

                  <div className={style.close}>
                      <IconButton onClick={closedHandler} color="#333" className={style.icon_close} Icon={CrossIcon}/>
                  </div>
                  {children}
              </div>
          </div>
      </Portal>
  )
}
