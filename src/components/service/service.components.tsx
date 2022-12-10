import ServiceItem from '../service-item/service-item.components'
import { HomeCards } from './service.styled'

import { useAppSelector } from '../../hooks/redux.hooks'
import { useDispatch } from 'react-redux'
import { fetchServices } from '../../store/reducers/service/service.action'
import { useEffect } from 'react'

const ServicesComponents = () => {
  const { services } = useAppSelector(state => state.serviceReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchServices() as any)
  }, [])

  return (
    <>
      <HomeCards>
          {services.map((service) => (
              <div key={service.id}><ServiceItem service={service}/></div>
          ))}
      </HomeCards>
    </>
  )
}

export default ServicesComponents
