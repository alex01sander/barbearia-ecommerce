import { BsGoogle } from 'react-icons/bs'
import { ImEnter } from 'react-icons/im'
import CustomInput from '../../components/custom-input/custom-input.components'
import validator from 'validator'
import HeaderComponents from '../../components/header/header.components'
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from './loginPages.styles'
import { useForm } from 'react-hook-form'
import CustomButton from '../../components/cutom-butto/custom-button.components'
import InputErrorMessage from '../../components/input-error-message/input-error-mesage.components'

const LoginPage = () => {
  const { register, formState: { errors }, handleSubmit } = useForm()

  const handleSubmitPress = (data: any) => {
    console.log(data)
  }

  return (
        <>
        <HeaderComponents/>
            <LoginContainer>
                <LoginContent>
                <LoginHeadline>Entre com a sua conta</LoginHeadline>

                <CustomButton startIcon={<BsGoogle size={18} />}>
            Entrar com o Google
          </CustomButton>

                    <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

                    <LoginInputContainer>
                        <p>Email</p>
                        <CustomInput hasError={!!errors?.email}
                        placeholder='Digite o seu e-mail' {...register('email', {
                          required: true,
                          validate: (value) => {
                            return validator.isEmail(value)
                          }
                        })}/>

                        {errors?.email?.type === 'required' && (
                             <InputErrorMessage>O e-mail é obrigatória</InputErrorMessage>
                        )}

                        {errors?.email?.type === 'validate' && (
                             <InputErrorMessage>Insira um e-mail valido</InputErrorMessage>
                        )}
                    </LoginInputContainer>
                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput hasError={!!errors?.password}
                         placeholder='Digite sua Senha' {...register('password', { required: true })}/>

                         {errors?.password?.type === 'required' && (
                            <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
                         )}
                    </LoginInputContainer>
                    <CustomButton startIcon={<ImEnter size={18}/>} onClick={() => handleSubmit(handleSubmitPress)()}>Entrar</CustomButton>
                </LoginContent>
            </LoginContainer>
        </>
  )
}

export default LoginPage
