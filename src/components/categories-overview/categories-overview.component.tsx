import { FunctionComponent, useContext, useEffect } from 'react'
import { CategoryContext } from '../../context/category.context'
import CategoryOverview from '../category-overview/category-overview.component'
import { Container } from './categories-overview.styles'

const CategoriesOverview: FunctionComponent = () => {
  const { categories, fecthCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fecthCategories()
    }
  }, [])

  return (
    <Container>
        {categories.map((category) => (
            <CategoryOverview key={category.id} category={category} />
        ))}
    </Container>
  )
}

export default CategoriesOverview
