const CartActionTypes = {
  toggleCart: 'cart/toggle' as const,
  addProductToCart: 'cart/addProductToCart'as const,
  removeProductFromCart: 'cart/removeProduct'as const,
  increaseCartProductQuantity: 'cart/increaseProductQuantity'as const,
  decreaseCartProductQuantity: 'cart/decreaseProductQuantity'as const,
  clearCartProducts: 'cart/clearProducts' as const
}

export default CartActionTypes
