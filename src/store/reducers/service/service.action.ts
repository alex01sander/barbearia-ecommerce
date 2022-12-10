import { collection, getDocs } from '@firebase/firestore'
import { Dispatch } from 'redux'
import { db } from '../../../config/firebase.config'
import { serviceConverter } from '../../../converters/firebase-converters'

import Service from '../../../types/services.types'
import ServiceActionTypes from './service.action-types'

export const fetchServices = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ServiceActionTypes.FETCH_SERVICES_START })

    try {
      const serviceFromFirestore: Service[] = []

      const querySnapshot = await getDocs(collection(db, 'dash')
        .withConverter(serviceConverter))

      querySnapshot.forEach((doc) => {
        serviceFromFirestore.push(doc.data() as any)
      })

      dispatch({ type: ServiceActionTypes.FETCH_SERVICES_SUCESS, payload: serviceFromFirestore })
    } catch (error) {
      dispatch({ type: ServiceActionTypes.FETCH_SERVICES_FAILURE })
    }
  }
}
