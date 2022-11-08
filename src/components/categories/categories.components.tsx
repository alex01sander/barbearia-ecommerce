import { useContext, useEffect } from 'react'
import { CategoriesContainer, CategoriesContent } from './categories.styles'
import CategoryItem from '../category-item/category-item.components'

import { CategoryContext } from '../../context/category.context'
import Loading from '../loading/loading.component'

const Catergories = () => {
  const { categories, isLoading, fecthCategories } = useContext(CategoryContext)
  useEffect(() => {
    fecthCategories()
  }, [])

  return (

    <CategoriesContainer>
      {isLoading && <Loading/>}
        <CategoriesContent>
          {categories.map((category) => (
           <div key={category.id}> <CategoryItem category={category}/></div>
          ))}
        </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Catergories
