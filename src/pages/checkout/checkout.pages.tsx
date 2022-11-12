import { FunctionComponent } from 'react'
import Checkout from '../../components/checkout/checkout.components'
import HeaderComponents from '../../components/header/header.components'

const CheckoutPages: FunctionComponent = () => {
  return (
    <>
        <HeaderComponents/>
        <Checkout/>
    </>
  )
}

export default CheckoutPages
