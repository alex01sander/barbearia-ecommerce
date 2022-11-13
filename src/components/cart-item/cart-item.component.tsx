import { FunctionComponent, useContext } from 'react'
import CartProduct from '../../types/cart.types'

import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from './cart-item.styles'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
import { CartContext } from '../../context/cart.contex'

interface CartItemProps{
    product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const { removeProductFromCart, increaseProductQuantity, descreaseProductQuantity } = useContext(CartContext)
  const removeProductClick = () => {
    removeProductFromCart(product.id)
  }

  const incrementProductClick = () => {
    increaseProductQuantity(product.id)
  }

  const descrementProductClick = () => {
    descreaseProductQuantity(product.id)
  }

  return (
    <CartItemContainer>
        <CartItemImage imageUrl={product.imageUrl}/>

        <CartItemInfo>
            <p>{product.name}</p>
            <p>R$ {product.price}</p>

            <CartItemQuantity>
                    <AiOutlineMinus size={18} onClick={descrementProductClick}/>
                    <p>{product.quantity}</p>
                    <AiOutlinePlus size={18} onClick={incrementProductClick}/>
            </CartItemQuantity>
        </CartItemInfo>
        <RemoveButton onClick={removeProductClick}>
            <AiOutlineClose size={25}/>
        </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
