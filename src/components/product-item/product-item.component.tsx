import { FunctionComponent } from 'react'
import Product from '../../types/products.types'
import CustomButton from '../cutom-butto/custom-button.components'
import { ProductContainer, ProductImage, ProductInfo } from './product-item.styles'
import { BsCartPlus } from 'react-icons/bs'

interface ProductItemProps {
    product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => (
       <>
            <ProductContainer>
                <ProductImage imageUrl={product.imageUrl}>
                    <CustomButton startIcon={<BsCartPlus size={18}/>}>Adicionar ao Carrinho</CustomButton>
                </ProductImage>

                    <ProductInfo>
                        <p>{product.name}</p>
                        <p>R$ {product.price}</p>
                    </ProductInfo>
            </ProductContainer>
        </>
)

export default ProductItem
