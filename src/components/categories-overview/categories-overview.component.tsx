import { FunctionComponent, useEffect } from 'react'

// Styles
import { Container } from './categories-overview.styles'

// Utilities

// Components
import CategoryOverview from '../category-overview/category-overview.component'
import Loading from '../loading/loading.component'

import { useAppSelector } from '../../hooks/redux.hooks'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../store/reducers/category/category.action'

const CategoriesOverview: FunctionComponent = () => {
  const { categories, isLoading } = useAppSelector(state => state.categoryReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories() as any)
    }
  }, [])

  if (isLoading) return <Loading />

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}

export default CategoriesOverview
