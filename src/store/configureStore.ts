import { combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import modalReducer from 'store/reducers/modal'
import orderReducer from 'store/reducers/order'
import pageReducer from './reducers/page'

export const rootReducer = combineReducers({
  order: orderReducer,
  modal: modalReducer,
  page: pageReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer)

export default store
