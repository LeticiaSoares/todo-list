import user  from './user-reducers'
import alert from './alert-reducers'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    user : user,
    alert : alert
  })

export default rootReducer
