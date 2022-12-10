import { combineReducers } from 'redux'
import cartReducer from './reducers/cart/cart.reducer'
import categoryReducer from './reducers/category/category.reducer'
import serviceReducer from './reducers/service/service.reducer'
import userReducer from './reducers/user/user.reducer'

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer,
  serviceReducer

})

export default rootReducer
