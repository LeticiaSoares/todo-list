import { call, put, take } from 'redux-saga/effects'
import  { loginUser } from '../../../apis/login.api'
import { STORE_USER, alertActions, userActions } from '../../actions'
import { setUser } from '../../../infra/local-storage'

function* fetchUser(action) {
  try {
    yield call(loginUser,action.payload)
    yield put(userActions.store(action.payload))
    setUser({ email : action.payload.email})
    window.location.href = '/'
  } catch (ex) {
    yield put(userActions.fail(ex))
    yield put(alertActions.openAlert({message : 'Usuário não encontrado!'}))
  }
}

export default fetchUser;