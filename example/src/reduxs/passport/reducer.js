
import { createReducer, statusToError, getStatusError } from 'http-services'

const initState = {
  groups: null
}

const ACTION_HANDLERS = {

}

export default (state = initState, action) => createReducer(state, action, ACTION_HANDLERS)