
import Product from '../../../types/products.types'
import CartActionTypes from './cart.reducer.types'

export const toggleCart = () => ({
  type: CartActionTypes.toggleCart
})

export const addProductToCart = (payload: Product) => ({
  type: CartActionTypes.addProductToCart,
  payload
})
