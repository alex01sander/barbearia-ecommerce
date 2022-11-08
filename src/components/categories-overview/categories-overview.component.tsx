import { FunctionComponent, useContext, useEffect } from 'react'
import { CategoryContext } from '../../context/category.context'
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
            <p key={category.id}>{category.displayName}</p>
        ))}
    </Container>
  )
}

export default CategoriesOverview
