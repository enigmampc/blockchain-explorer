import React from 'react'
import Modal from 'react-modal'
import { withTheme } from 'styled-components'
import ModalTitle from '../ModalTitle'

interface Props extends React.ComponentProps<typeof Modal> {
  children: React.ReactNode
  disableCloseButton?: boolean
  theme?: any
  title?: string
}

const ModalWrapper: React.FC<Props> = props => {
  const { onRequestClose, theme, title, children, disableCloseButton, ...restProps } = props
  const { modalStyle } = theme

  return (
    <Modal {...restProps} style={modalStyle}>
      {title ? (
        <ModalTitle title={title} onRequestClose={onRequestClose} disableCloseButton={disableCloseButton} />
      ) : null}
      {children}
    </Modal>
  )
}

export default withTheme(ModalWrapper)
