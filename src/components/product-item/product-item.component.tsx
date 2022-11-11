import { FunctionComponent, useContext } from 'react'
import Product from '../../types/products.types'
import CustomButton from '../cutom-butto/custom-button.components'
import { ProductContainer, ProductImage, ProductInfo } from './product-item.styles'
import { BsCartPlus } from 'react-icons/bs'
import { CartContext } from '../../context/cart.contex'

interface ProductItemProps {
    product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext)

  const handleProductAddClick = () => {
    addProductToCart(product)
  }

  return (

       <>
            <ProductContainer>
                <ProductImage imageUrl={product.imageUrl}>
                    <CustomButton onClick={handleProductAddClick} startIcon={<BsCartPlus size={18}/>}>Adicionar ao Carrinho</CustomButton>
                </ProductImage>

                    <ProductInfo>
                        <p>{product.name}</p>
                        <p>R$ {product.price}</p>
                    </ProductInfo>
            </ProductContainer>
        </>
  )
}

export default ProductItem
