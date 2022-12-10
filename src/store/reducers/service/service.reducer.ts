import Service from '../../../types/services.types'
import ServiceActionTypes from './service.action-types'

interface InitialState {
    services: Service[],
    isLoading: boolean
}

const initialState : InitialState = {
  services: [],
  isLoading: false
}

const serviceReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case ServiceActionTypes.FETCH_SERVICES_START:
      return { ...state, isLoading: true }

    case ServiceActionTypes.FETCH_SERVICES_SUCESS:
      return { ...state, isLoading: false, services: action.payload }

    case ServiceActionTypes.FETCH_SERVICES_FAILURE:
      return { ...state, isLoading: false }

    default:
      return state
  }
}

export default serviceReducer
