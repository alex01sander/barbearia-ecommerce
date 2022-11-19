import { FunctionComponent } from 'react'
import CartProduct from '../../types/cart.types'

import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from './cart-item.styles'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'

import { useDispatch } from 'react-redux'
import { decreaseCartProductQuantity, increaseCartProductQuantity, removeProductFromCart } from '../../store/reducers/cart/cart.actions'

interface CartItemProps{
    product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const dispatch = useDispatch()
  const removeProductClick = () => {
    dispatch(removeProductFromCart(product.id))
  }

  const incrementProductClick = () => {
    dispatch(increaseCartProductQuantity(product.id))
  }

  const descrementProductClick = () => {
    dispatch(decreaseCartProductQuantity(product.id))
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
