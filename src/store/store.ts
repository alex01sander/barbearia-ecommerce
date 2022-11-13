import { createStore } from 'redux'

import RooReducer from './root-reducer'

const Store = createStore(RooReducer)

export default Store
