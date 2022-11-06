
import { initializeApp } from '@firebase/app'
import { getAuth, GoogleAuthProvider } from '@firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyABgyioFg69KILYBZ8i-qMZtTowOAjgJ0A',
  authDomain: 'barbearia-8938c.firebaseapp.com',
  projectId: 'barbearia-8938c',
  storageBucket: 'barbearia-8938c.appspot.com',
  messagingSenderId: '64841389660',
  appId: '1:64841389660:web:f7b0e1cd2c16f010aeb899'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
