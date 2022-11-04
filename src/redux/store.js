import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import rootSaga from './root-sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = process.env.NODE_ENV === 'development' ? [sagaMiddleware, logger] : [sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)

export default store
