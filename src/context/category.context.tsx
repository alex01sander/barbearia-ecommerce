import { collection, getDocs } from '@firebase/firestore'
import React, { createContext, FunctionComponent, useState } from 'react'
import { db } from '../config/firebase.config'
import { categoryConverter } from '../converters/firebase-converters'
import Category from '../types/category.types'

interface ICategoryContext {
    categories: Category[]
    isLoading: boolean
    fecthCategories: () => Promise<void>
}

interface CategoryProps{
    children: React.ReactNode
}

export const CategoryContext = createContext<ICategoryContext>({
  isLoading: false,
  categories: [],
  fecthCategories: () => Promise.resolve()
})

const CategoryContextProvider: FunctionComponent<CategoryProps> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([])

  const [isLoading, setIsLoading] = useState(false)

  const fecthCategories = async () => {
    try {
      setIsLoading(true)
      const categoriesFromFirestore: Category[] = []

      const querySnapshot = await getDocs(collection(db, 'categories').withConverter(categoryConverter))

      querySnapshot.forEach((doc: any) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (

    <CategoryContext.Provider value={{ categories, isLoading, fecthCategories }}>
        {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
