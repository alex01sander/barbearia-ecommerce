
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/home.pages'
import ShopPages from './pages/shop/shop.pages'
import LoginPage from './pages/login/login.pages'
import SignUpPages from './pages/sign-up/sign-up.pages'
function App () {
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
