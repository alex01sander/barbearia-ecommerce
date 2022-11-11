import React, { createContext, FunctionComponent, useState } from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/products.types'

interface CartContestProps{
    children: React.ReactNode
}

interface ICartContextProps {
    isVisible: boolean
    products: CartProduct[]
    toggleCart: () => void
    addProductToCart: (product: Product) => void
}

export const CartContext = createContext<ICartContextProps>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {}
})

const CartContextProvider: FunctionComponent<CartContestProps> = ({ children }) => {
  const [isVisible, setIsVsible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVsible(prevState => !prevState)
  }

  const addProductToCart = (product: Product) => {
    setProducts((prevState) => [...prevState, { ...product, qunatity: 1 }])
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart, addProductToCart }}>{children}</CartContext.Provider>
  )
}

export default CartContextProvider
