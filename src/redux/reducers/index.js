import { combineReducers } from 'redux'
import authReducer from './authReducer'
import languageReducer from './languageReducer'
import appReducer from './appReducer'
import shopReducer from './shopReducer'
import cartReducer from './cartReducer'
import profileReducer from './profileReducer'

//decide to leave it for demostration
const reducers = combineReducers({
  language: languageReducer,
  auth: authReducer,
  app: appReducer,
  shop: shopReducer,
  cart: cartReducer,
  profile: profileReducer
})

export default reducers