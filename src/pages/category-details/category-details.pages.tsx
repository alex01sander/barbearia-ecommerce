import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import CategoryDetails from '../../components/category-details/category-details.component'
import HeaderComponents from '../../components/header/header.components'

const CategoryDetailsPage: FunctionComponent = () => {
  const { id } = useParams()

  if (!id) return null
  return (
        <>
            <HeaderComponents/>
            <CategoryDetails categoryId={id}/>

        </>
  )
}

export default CategoryDetailsPage
