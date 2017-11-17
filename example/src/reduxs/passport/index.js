
import { combineReducers } from 'redux'
import { passportReducer } from '../../../../src'
import pReducer from './reducer'

const Reducer = combineReducers({ passportReducer, passportReducer: pReducer })
console.log(Reducer)

export {
  Reducer
}