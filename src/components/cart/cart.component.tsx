import { FunctionComponent, useContext } from 'react'
import CustomButton from '../cutom-butto/custom-button.components'
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from './cart.styles'
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from '../../context/cart.contex'

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart } = useContext(CartContext)
  return (

    <CartContainer isVisible={isVisible}>
        <CartEscapeArea onClick={toggleCart}/>
        <CartContent>
            <CartTitle>Seu Carrinho</CartTitle>

            {/* produtos */}
            <CartTotal>Total: R$ 100</CartTotal>
            <CustomButton startIcon={<BsCartCheck/>}>Ir para o checkout</CustomButton>
        </CartContent>
    </CartContainer>

  )
}

export default Cart