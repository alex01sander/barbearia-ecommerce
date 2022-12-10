import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from '@firebase/firestore'
import Category from '../types/category.types'
import Services from '../types/service.types'
import User from '../types/user.types'

export const categoryConverter = {

  toFirestore (category: Category): DocumentData {
    return { ...category }
  },

  fromFirestore (snapshot: QueryDocumentSnapshot, options: SnapshotOptions):Category {
    const data = snapshot.data(options)

    return {
      id: data.id,
      displayName: data.displayName,
      imageUrl: data.imageUrl,
      name: data.name,
      products: data.products
    }
  }
}

export const serviceConverter = {
  toFirestore (service: Services): DocumentData {
    return { ...service }
  },

  fromFirestore (snapshot: QueryDocumentSnapshot, options: SnapshotOptions):Services {
    const data = snapshot.data(options)

    return {
      id: data.id,
      tabela: data.tabela,
      imageUrl: data.imageUrl,
      name: data.name
    }
  }

}

export const userConverter = {

  toFirestore (user: User): DocumentData {
    return { ...user }
  },

  fromFirestore (snapshot: QueryDocumentSnapshot, options: SnapshotOptions):User {
    const data = snapshot.data(options)

    return {
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      provider: data.provider
    }
  }
}
