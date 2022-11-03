import { FunctionComponent, InputHTMLAttributes } from 'react'
import { CustomInputContainer } from './custom-input.styles'

interface CustomIputProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean
}

const CustomInput: FunctionComponent<CustomIputProps> = ({ hasError, ...rest }) => {
  return (
    <>
    <CustomInputContainer hasError={hasError} {...rest}/>
    </>
  )
}

export default CustomInput
