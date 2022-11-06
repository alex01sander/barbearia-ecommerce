import { HeaderContainer, HeaderItem, HeaderItems, HeaderTile } from './header.styles'
import { BsCart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { signOut } from '@firebase/auth'
import { auth } from '../../config/firebase.config'
const HeaderComponents = () => {
  const navigate = useNavigate()

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
            <HeaderItem onClick={handleLoginClick}>Entrar</HeaderItem>
            <HeaderItem onClick={handleSignUpClick}>Cadastra-se</HeaderItem>
            <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
            <HeaderItem><BsCart size={25} margin-left={10}/> 5 </HeaderItem>

        </HeaderItems>
    </HeaderContainer>
  )
}

export default HeaderComponents
