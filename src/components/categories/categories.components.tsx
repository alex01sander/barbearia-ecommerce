import { useEffect, useState } from 'react'
import Category from '../../types/category.types'
import { CategoriesContainer, CategoriesContent } from './categories.styles'
import axios from 'axios'
import env from '../../config/env.congif'
import CategoryItem from '../category-item/category-item.components'

const Catergories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log(categories)
  const fecthCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)
      console.log({ data })
      setCategories(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fecthCategories()
  }, [])

  return (
    <CategoriesContainer>
        <CategoriesContent>
          {categories.map((category) => (
           <div key={category.id}> <CategoryItem category={category}/></div>
          ))}
        </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Catergories
