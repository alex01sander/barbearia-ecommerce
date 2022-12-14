
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'
// @ts-ignore
import storage from 'redux-persist/lib/storage'
// @ts-ignore
import persistReducer from 'redux-persist/es/persistReducer'
// @ts-ignore
import persistStore from 'redux-persist/es/persistStore'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
}

const persistRootReducer: typeof rootReducer =
persistReducer(persistConfig, rootReducer)

export const Store = configureStore({
  reducer: persistRootReducer,
  middleware: [thunk, logger]
})

export const persistedStore = persistStore(Store)
export type RootState = ReturnType<typeof Store.getState>
