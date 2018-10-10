import { combineReducers } from 'redux'

import cryptCards from './crypt-cards'
import mainDisplay from './main-display'
import filters from './filters'


export default combineReducers({
  cryptCards,
  mainDisplay,
  filters,
})
