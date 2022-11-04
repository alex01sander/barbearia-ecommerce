import React, { FunctionComponent } from 'react'
import { InputErrorMessageContainer } from './input-error-message.styles'

interface InputErrorProps {
    children ?: any
}

const InputErrorMessage: FunctionComponent<InputErrorProps> = ({ children }) => {
  return (
    <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
  )
}

export default InputErrorMessage
