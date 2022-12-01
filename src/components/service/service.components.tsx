
import ServiceItem from '../service-item/service-item.components'
import { HomeCards } from './service.styled'

import { getDocs, collection } from '@firebase/firestore'
import { db } from '../../config/firebase.config'
import { useEffect, useState } from 'react'
import Services from '../../types/service.types'

const ServicesComponents = () => {
  const [services, setServices] = useState<Services[]>([])

  const fetchService = async () => {
    try {
      const serviceFromFirestore: Services[] = []
      const querySnapshot = await getDocs(collection(db, 'dash'))

      querySnapshot.forEach((doc: any) => {
        serviceFromFirestore.push(doc.data())

        setServices(serviceFromFirestore)
      })
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchService()
  })
  return (
    <HomeCards>
        {services.map((service) => (
            <div key={service.id}><ServiceItem service={service}/></div>
        ))}
    </HomeCards>
  )
}

export default ServicesComponents
