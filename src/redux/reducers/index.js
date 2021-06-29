import { combineReducers } from 'redux'
import authReducer from './authReducer'
import languageReducer from './languageReducer'
import appReducer from './appReducer'
import shopReducer from './salonReducer'
import cartReducer from './cartReducer'
import profileReducer from './profileReducer'
import salonReducer from './salonReducer'
import categoryReducer from './categoryReducer'
import serviceReducer from './serviceReducer'
import snackReducer from './snackReducer'

//decide to leave it for demostration
const reducers = combineReducers({
  language: languageReducer,
  auth: authReducer,
  app: appReducer,
  shop: shopReducer,
  cart: cartReducer,
  profile: profileReducer,
  salon: salonReducer,
  category: categoryReducer,
  service: serviceReducer,
  snack: snackReducer
})

export default reducers