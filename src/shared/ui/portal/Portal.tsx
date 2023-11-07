import type React from 'react'
import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
  children: ReactNode
  element?: HTMLElement
}
export const Portal: React.FC<IPortalProps> = ({ children, element = document.body }) => {
  return createPortal(children, element)
}
