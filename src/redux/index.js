import { createStore, applyMiddleware, compose  } from 'redux'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)

export function startSagaRoot(){
    sagaMiddleware.run(rootSaga)
}

export default store