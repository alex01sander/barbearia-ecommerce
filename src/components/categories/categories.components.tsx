import { useEffect } from 'react'
import { CategoriesContainer, CategoriesContent } from './categories.styles'
import CategoryItem from '../category-item/category-item.components'

import Loading from '../loading/loading.component'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../store/reducers/category/category.action'
import { useAppSelector } from '../../hooks/redux.hooks'

const Catergories = () => {
  const { categories, isLoading } = useAppSelector(state => state.categoryReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories() as any)
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
