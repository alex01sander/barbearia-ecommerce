import { FunctionComponent } from 'react'
import CartProduct from '../../types/cart.types'

import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from './cart-item.styles'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'

interface CartItemProps{
    product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  return (
    <CartItemContainer>
        <CartItemImage imageUrl={product.imageUrl}/>

        <CartItemInfo>
            <p>{product.name}</p>
            <p>R$ {product.price}</p>

            <CartItemQuantity>
                    <AiOutlineMinus size={18}/>
                    <p>{product.qunatity}</p>
                    <AiOutlinePlus size={18}/>
            </CartItemQuantity>
        </CartItemInfo>
        <RemoveButton>
            <AiOutlineClose size={25}/>
        </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
