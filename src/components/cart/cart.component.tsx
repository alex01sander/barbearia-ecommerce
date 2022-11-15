import { FunctionComponent, useContext } from 'react'
import CustomButton from '../cutom-butto/custom-button.components'
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from './cart.styles'
import { BsCartCheck } from 'react-icons/bs'

import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/cart.contex'

const Cart: FunctionComponent = () => {
  const {
    isVisible, products, productsTotalPrice,
    productsCount, toggleCart
  } = useContext(CartContext)

  const navigate = useNavigate()

  const handleCheckoutClick = () => {
    navigate('/checkout')
    toggleCart()
  }

  return (

    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {/* produtos */}
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {productsCount > 0 && (
          <CartTotal>Total: R${productsTotalPrice}</CartTotal>
        )}

        {productsCount > 0 && (
          <CustomButton
            startIcon={<BsCartCheck />}
            onClick={handleCheckoutClick}>
            Ir para o Checkout
          </CustomButton>
        )}

        {productsCount === 0 && <p>Seu carrinho está vazio!</p>}
      </CartContent>
    </CartContainer>
  )
}

export default Cart
