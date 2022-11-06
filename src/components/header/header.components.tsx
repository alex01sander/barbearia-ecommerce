import { HeaderContainer, HeaderItem, HeaderItems, HeaderTile } from './header.styles'
import { BsCart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { signOut } from '@firebase/auth'
import { auth } from '../../config/firebase.config'
import { useContext } from 'react'
import { UserContext } from '../../context/use.context'
const HeaderComponents = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(UserContext)

  const handleHomeClick = () => {
    navigate('/')
  }

  const handleShopClick = () => {
    navigate('/shop')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/signUp')
  }

  return (
    <HeaderContainer>
        <HeaderTile onClick={handleHomeClick}>BarberShop</HeaderTile>
        <HeaderItems>
            <HeaderItem onClick={handleShopClick}>Loja</HeaderItem>
            {!isAuthenticated && (
              <>
              <HeaderItem onClick={handleLoginClick}>Entrar</HeaderItem>
              <HeaderItem onClick={handleSignUpClick}>Cadastra-se</HeaderItem>
              </>
            )}
            {isAuthenticated && (
              <>
              <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
              </>
            )}
            <HeaderItem><BsCart size={25} margin-left={10}/> 5 </HeaderItem>

        </HeaderItems>
    </HeaderContainer>
  )
}

export default HeaderComponents
