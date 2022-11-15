import { BsGoogle } from 'react-icons/bs'
import { ImEnter } from 'react-icons/im'
import CustomInput from '../../components/custom-input/custom-input.components'
import validator from 'validator'
import HeaderComponents from '../../components/header/header.components'
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from './loginPages.styles'
import { useForm } from 'react-hook-form'
import CustomButton from '../../components/cutom-butto/custom-button.components'
import InputErrorMessage from '../../components/input-error-message/input-error-mesage.components'
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth'
import { auth, db, googleProvider } from '../../config/firebase.config'
import { addDoc, collection, getDocs, query, where } from '@firebase/firestore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/loading/loading.component'
import { useAppSelector } from '../../hooks/redux.hooks'

interface LoginForm {
  email: string
  password: string
}

const LoginPage = () => {
  const { register, formState: { errors }, setError, handleSubmit } = useForm<LoginForm>()

  const [isLoading, setIsLoading] = useState(false)

  const { isAuthenticated } = useAppSelector((rootReducer) => rootReducer.userReducer)

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/shop')
    }
  }, [isAuthenticated])
  const handleSignInWithGooglePress = async () => {
    try {
      setIsLoading(true)
      const userCredentials = await signInWithPopup(auth, googleProvider)

      const querySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', userCredentials.user.uid)))

      const user = querySnapshot.docs[0]?.data()

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(' ')[0]
        const lastName = userCredentials.user.displayName?.split(' ')[1]
        await addDoc(collection(db, 'users'), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          provider: 'google'
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  const handleSubmitPress = async (data: LoginForm) => {
    try {
      setIsLoading(true)
      const useCredentials = await signInWithEmailAndPassword(auth, data.email, data.password)
      console.log(useCredentials)
    } catch (error) {
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError('password', { type: 'mismatch' })
      }

      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError('password', { type: 'notFound' })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
        <>
        <HeaderComponents/>
        {isLoading && <Loading/>}
            <LoginContainer>
                <LoginContent>
                <LoginHeadline>Entre com a sua conta</LoginHeadline>

                <CustomButton startIcon={<BsGoogle size={18} />}onClick={handleSignInWithGooglePress}>
            Entrar com o Google
          </CustomButton>

                    <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

                    <LoginInputContainer>
                        <p>Email</p>
                        <CustomInput hasError={!!errors?.email}
                        placeholder='Digite o seu e-mail' {...register('email', {
                          required: true,
                          validate: (value) => {
                            return validator.isEmail(value)
                          }
                        })}/>

                        {errors?.email?.type === 'required' && (
                             <InputErrorMessage>O e-mail é obrigatória</InputErrorMessage>
                        )}
                        {errors?.email?.type === 'notFound' && (
                             <InputErrorMessage>O e-mail E-mail não encontrado</InputErrorMessage>
                        )}

                        {errors?.email?.type === 'validate' && (
                             <InputErrorMessage>Insira um e-mail valido</InputErrorMessage>
                        )}
                    </LoginInputContainer>
                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput hasError={!!errors?.password}
                         placeholder='Digite sua Senha' {...register('password', { required: true })} type={'password'}/>

                         {errors?.password?.type === 'required' && (
                            <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
                         )}
                         {errors?.password?.type === ',ismatch' && (
                          <InputErrorMessage>Senha inválida</InputErrorMessage>
                         )}
                    </LoginInputContainer>
                    <CustomButton startIcon={<ImEnter size={18}/>} onClick={() => handleSubmit(handleSubmitPress)()}>Entrar</CustomButton>
                </LoginContent>
            </LoginContainer>
        </>
  )
}

export default LoginPage
