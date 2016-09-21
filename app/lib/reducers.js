import { combineReducers } from 'redux'

import { CHANGE_TEXT } from './actions'

const changed = (changed = false, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return true
    default:
      return changed
  }
}

const text = (text = '', action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return action.text
    default:
      return text
  }
}

const app = combineReducers({
  text,
  changed
})

export default app
