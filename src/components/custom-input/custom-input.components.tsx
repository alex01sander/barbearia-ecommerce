import React, { FunctionComponent, InputHTMLAttributes } from 'react'
import { CustomInputContainer } from './custom-input.styles'

interface CustomIputProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean
}

const CustomInput: FunctionComponent<CustomIputProps> = React.forwardRef((props, ref) => {
  return <CustomInputContainer {...props} ref={ref as any}/>
})

CustomInput.displayName = 'CustomInput'
export default CustomInput
