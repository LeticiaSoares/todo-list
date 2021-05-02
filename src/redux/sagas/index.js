import { takeEvery, all } from 'redux-saga/effects'
import { POST_USER } from '../actions'
import fetchUser  from './user'


function* rootSaga() {
  yield all([
          takeEvery(POST_USER, fetchUser),
          //takeEvery(CLOSE_ALERT,closeAlert)
        ])
}


export default rootSaga;