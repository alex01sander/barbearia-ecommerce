import { HeaderContainer, HeaderItem, HeaderItems, HeaderTile } from './header.styles'
import { BsCart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import { useContext } from 'react'

import { CartContext } from '../../context/cart.contex'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '@firebase/auth'
import { auth } from '../../config/firebase.config'

const HeaderComponents = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((rootReducer : any) => rootReducer.userReducer)
  const { toggleCart, productsCount } = useContext(CartContext)

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
    dispatch({ type: 'LOGOUT_USER' })
    signOut(auth)
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
            <HeaderItem onClick={toggleCart}>
              <BsCart size={25}/> <p style={{ marginLeft: 5 }}>{productsCount}</p>
              </HeaderItem>

        </HeaderItems>
    </HeaderContainer>
  )
}

export default HeaderComponents
