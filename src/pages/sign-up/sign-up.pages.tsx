import { ImEnter } from 'react-icons/im'
import CustomInput from '../../components/custom-input/custom-input.components'
import CustomButton from '../../components/cutom-butto/custom-button.components'
import HeaderComponents from '../../components/header/header.components'
import { SignUpContainer, SignUpContent, SignUpHeadline, SignUpInputContainer } from './sign-up.styles'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import InputErrorMessage from '../../components/input-error-message/input-error-mesage.components'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { auth, db } from '../../config/firebase.config'
import { addDoc, collection } from '@firebase/firestore'

interface SignUpForm{
    firstName: string
    lastName: string
    email: string
    password: string
    passwordConfirmation: string
}

const SignUpPages = () => {
  const { register, formState: { errors }, watch, handleSubmit } = useForm<SignUpForm>()

  const watchPassword = watch('password')
  const handleClickPress = async (data: SignUpForm) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password)

      await addDoc(collection(db, 'users  '), {
        id: userCredentials.user.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        email: userCredentials.user.email
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
        <HeaderComponents/>
        <SignUpContainer>

            <SignUpContent>
            <SignUpHeadline>Cadastre-se</SignUpHeadline>
                <SignUpInputContainer>
                    <p>Nome</p>
                    <CustomInput hasError={!!errors?.firstName}
                    placeholder='Digite seu nome' {...register('firstName', { required: true })}/>
                    {errors?.firstName?.type === 'required' && (
                        <InputErrorMessage>Nome obrigatório</InputErrorMessage>
                    )}
                </SignUpInputContainer>
                <SignUpInputContainer>
                    <p>Sobrenome</p>
                    <CustomInput hasError={!!errors?.lastName}
                    placeholder='Digite seu Sobrenome' {...register('lastName', { required: true })}/>
                     {errors?.lastName?.type === 'required' && (
                        <InputErrorMessage>Sobrenome obrigatório</InputErrorMessage>
                     )}
                </SignUpInputContainer>
                <SignUpInputContainer>
                    <p>E-mail</p>
                    <CustomInput hasError={!!errors?.email}
                    placeholder='Digite seu E-mail' {...register('email', {
                      required: true,
                      validate: (value) => {
                        return validator.isEmail(value)
                      }
                    })}/>
                     {errors?.email?.type === 'required' && (
                        <InputErrorMessage>E-mail obrigatório</InputErrorMessage>
                     )}
                     {errors?.email?.type === 'validate' && (
                        <InputErrorMessage>Insira um E-mail válido</InputErrorMessage>
                     )}
                </SignUpInputContainer>
                <SignUpInputContainer>
                    <p>Senha</p>
                    <CustomInput hasError={!!errors?.password}
                    placeholder='Digite sua Senha' type='password' {...register('password', {
                      required: true
                    })}/>
                     {errors?.password?.type === 'required' && (
                        <InputErrorMessage>Senha obrigatória</InputErrorMessage>
                     )}
                </SignUpInputContainer>
                <SignUpInputContainer>
                    <p>Confirme sua Senha</p>
                    <CustomInput hasError={!!errors?.passwordConfirmation}
                    placeholder='Confirme sua Senha' type='password' {...register('passwordConfirmation',
                      {
                        required: true,
                        validate: (value) => {
                          return value === watchPassword
                        }
                      })} />
                     {errors?.passwordConfirmation?.type === 'required' && (
                        <InputErrorMessage>Confirme sua Senha obrigatório</InputErrorMessage>
                     )}
                     {errors?.passwordConfirmation?.type === 'validate' && (
                        <InputErrorMessage>As senhas estão diferentes</InputErrorMessage>
                     )}
                </SignUpInputContainer>
                <CustomButton startIcon={<ImEnter size={18}/>} onClick={() => handleSubmit(handleClickPress)()}>Criar Conta</CustomButton>
            </SignUpContent>
        </SignUpContainer>
    </>
  )
}

export default SignUpPages
