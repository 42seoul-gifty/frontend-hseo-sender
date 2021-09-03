import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import modalReducer from 'store/reducers/modal'
import todoReducer from 'store/reducers/todos'
import { watcherSaga } from './sagas/rootSaga'

export const rootReducer = combineReducers({
  todos: todoReducer,
  modal: modalReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const store = createStore(rootReducer, {}, applyMiddleware(...middleware))

sagaMiddleware.run(watcherSaga)

export default store
