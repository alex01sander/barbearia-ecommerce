import Services from './service.types'

interface Service {
    id: string
    name: string
    tabela: string
    imageUrl: string
    service: Services[]
}

export default Service
