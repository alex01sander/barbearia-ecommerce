import { HeaderContainer, HeaderItem, HeaderItems, HeaderTile } from './header.styles'
import { BsCart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import { useContext } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '@firebase/auth'
import { auth } from '../../config/firebase.config'
import { logout } from '../../store/reducers/user/user.actions'
import { CartContext } from '../../context/cart.contex'
import { toggleCart } from '../../store/reducers/cart/cart.actions'

const HeaderComponents = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((rootReducer : any) => rootReducer.userReducer)
  const { productsCount } = useContext(CartContext)

  const dispatch = useDispatch()

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

  const handleSignOutClick = () => {
    dispatch(logout())
    signOut(auth)
  }

  const handleCartClick = () => {
    dispatch(toggleCart())
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
              <HeaderItem onClick={handleSignOutClick}>Sair</HeaderItem>
              </>
            )}
            <HeaderItem onClick={handleCartClick}>
              <BsCart size={25}/> <p style={{ marginLeft: 5 }}>{productsCount}</p>
              </HeaderItem>

        </HeaderItems>
    </HeaderContainer>
  )
}

export default HeaderComponents
