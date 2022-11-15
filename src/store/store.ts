import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import RooReducer from './root-reducer'

const Store = createStore(RooReducer, applyMiddleware(logger))

export type RootState = ReturnType<typeof Store.getState>

export default Store
