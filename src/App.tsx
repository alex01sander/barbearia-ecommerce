
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/home.pages'
import ShopPages from './pages/shop/shop.pages'
import LoginPage from './pages/login/login.pages'
import SignUpPages from './pages/sign-up/sign-up.pages'
import { onAuthStateChanged } from '@firebase/auth'
import { auth, db } from './config/firebase.config'
import { FunctionComponent, useContext, useState } from 'react'
import { UserContext } from './context/use.context'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { userConverter } from './converters/firebase-converters'
import Loading from './components/loading/loading.component'
import CategoryDetailsPage from './pages/category-details/category-details.pages'
import Cart from './components/cart/cart.component'

import CheckoutPages from './pages/checkout/checkout.pages'
import Authenctication from './components/Authentication Guard/authentication.component'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)
  onAuthStateChanged(auth, async (user) => {
    console.log(user)
    const isSigningOut = isAuthenticated && !user
    if (isSigningOut) {
      logoutUser()
      return setIsInitializing(false)
    }

    const isSigningIn = !isAuthenticated && user
    if (isSigningIn) {
      const querySnapshot = await getDocs(query(collection(db, 'users').withConverter(userConverter), where('id', '==', user.uid)))

      const userFromFirestore = querySnapshot.docs[0]?.data()
      loginUser(userFromFirestore)
      return setIsInitializing(false)
    }
    return setIsInitializing(false)
  })
  if (isInitializing) return <Loading/>
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/category/:id' element={<CategoryDetailsPage/>}/>
        <Route path='/checkout' element={<Authenctication><CheckoutPages/></Authenctication>}/>
        <Route path='/shop' element={<ShopPages/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signUp' element={<SignUpPages/>}/>
      </Routes>
        <Cart/>
    </BrowserRouter>
  )
}

export default App
