import axios from 'axios'
import { FunctionComponent, useContext, useState } from 'react'
import { BsBagCheck } from 'react-icons/bs'
import { CartContext } from '../../context/cart.contex'
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../cutom-butto/custom-button.components'
import Loading from '../loading/loading.component'
import { CheckoutContainer, CheckoutProducts, CheckoutTitle, CheckoutTotal } from './checkout.styles'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  const [isLoading, setIsLoading] = useState(false)

  const handleFinishPurchaseClick = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/create-checkout-session`, { products })

      window.location.href = data.url
      console.log(data.url)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
        <CheckoutContainer>
          {isLoading && <Loading/>}
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
            <CustomButton startIcon={<BsBagCheck size={18}/>} onClick={handleFinishPurchaseClick}>Finaliza pedido</CustomButton>

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
