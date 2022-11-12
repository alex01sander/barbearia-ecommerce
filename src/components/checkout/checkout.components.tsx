import { FunctionComponent, useContext } from 'react'
import { BsBagCheck } from 'react-icons/bs'
import { CartContext } from '../../context/cart.contex'
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../cutom-butto/custom-button.components'
import { CheckoutContainer, CheckoutProducts, CheckoutTitle, CheckoutTotal } from './checkout.styles'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  return (
    <>
        <CheckoutContainer>
            <CheckoutTitle>Checkout</CheckoutTitle>
            {products.length > 0
              ? (
                <>
                <CheckoutProducts>
                {products.map((product) => (
                  <CartItem key={product.id} product={product}/>
                ))}
            </CheckoutProducts>
            <CheckoutTotal>
                <p>R$ {productsTotalPrice}</p>
            </CheckoutTotal>
            <CustomButton startIcon={<BsBagCheck size={18}/>}>Finaliza pedido</CustomButton>

                </>
                )
              : (
                <p>Seu Carrinho está vazio</p>
                )}

        </CheckoutContainer>
    </>
  )
}

export default Checkout
