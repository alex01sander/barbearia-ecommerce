import { FunctionComponent, useContext } from 'react'
import CustomButton from '../cutom-butto/custom-button.components'
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from './cart.styles'
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from '../../context/cart.contex'
import CartItem from '../cart-item/cart-item.component'

const Cart: FunctionComponent = () => {
  const { isVisible, products, productsTotalPrice, productsCount, toggleCart } = useContext(CartContext)

  return (

    <CartContainer isVisible={isVisible}>
        <CartEscapeArea onClick={toggleCart}/>
        <CartContent>
            <CartTitle>Seu Carrinho</CartTitle>

            {products.map(product => <CartItem product={product} key={product.id}/>)}
            {productsCount > 0 && (
              <CartTotal>Total: {productsTotalPrice}</CartTotal>
            ) }
            {productsCount > 0 && (
              <CustomButton startIcon={<BsCartCheck/>}>Ir para o checkout</CustomButton>
            )}
            {productsCount === 0 && (
              <p>Seu Carrinho está vazio</p>
            )}
        </CartContent>
    </CartContainer>

  )
}

export default Cart
