import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'
import { CustomButtonContainer, IconContainer } from './custom-button.styles'

interface Children extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: any
    startIcon?: React.ReactNode
}

const CustomButton: FunctionComponent<Children> = ({ children, startIcon, ...rest }) => {
  return (
    <>
        <CustomButtonContainer {...rest}>
        {startIcon && <IconContainer>{startIcon}</IconContainer>}
            {children}</CustomButtonContainer>
    </>
  )
}

export default CustomButton
