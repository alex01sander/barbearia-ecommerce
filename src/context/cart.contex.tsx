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
    removeProductFromCart:(productId: string) => void
}

export const CartContext = createContext<ICartContextProps>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {}
})

const CartContextProvider: FunctionComponent<CartContestProps> = ({ children }) => {
  const [isVisible, setIsVsible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVsible(prevState => !prevState)
  }

  const addProductToCart = (product: Product) => {
    const productIsAlreadyInCart = products.some((item) => item.id === product.id)

    if (productIsAlreadyInCart) {
      return setProducts(products => products.map(item => item.id === product.id
        ? { ...item, qunatity: item.qunatity + 1 }
        : item))
    }

    setProducts((prevState) => [...prevState, { ...product, qunatity: 1 }])
  }

  const removeProductFromCart = (productId: string) => {
    setProducts((products) => products.filter((product) => product.id !== productId))
  }

  return (
    <CartContext.Provider value={{
      isVisible,
      products,
      toggleCart,
      addProductToCart,
      removeProductFromCart
    }}>
        {children}
        </CartContext.Provider>
  )
}

export default CartContextProvider
