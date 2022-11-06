
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/home.pages'
import ShopPages from './pages/shop/shop.pages'
import LoginPage from './pages/login/login.pages'
import SignUpPages from './pages/sign-up/sign-up.pages'
import { onAuthStateChanged } from '@firebase/auth'
import { auth, db } from './config/firebase.config'
import { FunctionComponent, useContext } from 'react'
import { UserContext } from './context/use.context'
import { collection, getDocs, query, where } from '@firebase/firestore'

const App: FunctionComponent = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)
  onAuthStateChanged(auth, async (user) => {
    console.log(user)
    const isSigningOut = isAuthenticated && !user
    if (isSigningOut) {
      return logoutUser()
    }

    const isSigningIn = !isAuthenticated && user
    if (isSigningIn) {
      const querySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', user.uid)))

      const userFromFirestore = querySnapshot.docs[0]?.data()
      return loginUser(userFromFirestore as any)
    }
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPages/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signUp' element={<SignUpPages/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
