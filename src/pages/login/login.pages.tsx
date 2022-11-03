import HeaderComponents from '../../components/header/header.components'
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from './loginPages.styles'

const LoginPage = () => {
  return (
        <>
        <HeaderComponents/>
            <LoginContainer>
                <LoginContent>
                <LoginHeadline>Entre com a sua conta</LoginHeadline>

                    {/* buttom */}

                    <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

                    <LoginInputContainer>
                        {/* input */}
                    </LoginInputContainer>
                    <LoginInputContainer>
                        {/* input */}
                    </LoginInputContainer>

                    {/* buttom */}
                </LoginContent>
            </LoginContainer>
        </>
  )
}

export default LoginPage
