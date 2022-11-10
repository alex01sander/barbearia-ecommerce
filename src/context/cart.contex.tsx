import React, { createContext, FunctionComponent, useState } from 'react'
import CartProduct from '../types/cart.types'

interface CartContestProps{
    children: React.ReactNode
}

interface ICartContextProps {
    isVisible: boolean
    products: CartProduct[]
    toggleCart: () => void
}

export const CartContext = createContext<ICartContextProps>({
  isVisible: false,
  products: [],
  toggleCart: () => {}
})

const CartContextProvider: FunctionComponent<CartContestProps> = ({ children }) => {
  const [isVisible, setIsVsible] = useState(false)
  const [products] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVsible(prevState => !prevState)
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart }}>{children}</CartContext.Provider>
  )
}

export default CartContextProvider
