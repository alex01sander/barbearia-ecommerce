import { useEffect, useState } from 'react'
import Category from '../../types/category.types'
import { CategoriesContainer, CategoriesContent } from './categories.styles'
import CategoryItem from '../category-item/category-item.components'
import { getDocs, collection } from '@firebase/firestore'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firebase-converters'

const Catergories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log(categories)
  const fecthCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []

      const querySnapshot = await getDocs(collection(db, 'categories').withConverter(categoryConverter))

      querySnapshot.forEach((doc: any) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
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
