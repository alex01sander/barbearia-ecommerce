import React, { FunctionComponent, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import HeaderComponents from '../header/header.components'
import Loading from '../loading/loading.component'

interface AuthenticationProps{
    children: React.ReactNode
}

const Authenctication: FunctionComponent<AuthenticationProps> = ({ children }) => {
  const { isAuthenticated } = useSelector((rootReducer: any) => rootReducer.userReducer)
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])
  if (!isAuthenticated) {
    return <>
        <HeaderComponents/>
        <Loading message='Você precisa estar logado para acessar está página.
        Você será redirecionado para página de login em instantes'/>
    </>
  }

  return <>{children}</>
}

export default Authenctication
