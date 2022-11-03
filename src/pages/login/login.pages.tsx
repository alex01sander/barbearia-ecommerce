import { BsGoogle } from 'react-icons/bs'
import { ImEnter } from 'react-icons/im'
import CustomInput from '../../components/custom-input/custom-input.components'
import CustomButton from '../../components/cutom-buttom/custom-button.components'
import HeaderComponents from '../../components/header/header.components'
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from './loginPages.styles'

const LoginPage = () => {
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
                        <CustomInput placeholder='Digite o seu e-mail'/>
                    </LoginInputContainer>
                    <LoginInputContainer>
                        <CustomInput placeholder='Digite sua Senha'/>
                    </LoginInputContainer>
                    <CustomButton startIcon={<ImEnter size={18}/>}>Entrar</CustomButton>
                </LoginContent>
            </LoginContainer>
        </>
  )
}

export default LoginPage
