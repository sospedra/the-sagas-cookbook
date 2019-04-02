import { configureStore } from 'redux-starter-kit'
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from 'redux'
import { fork } from 'redux-saga/effects'
import * as watchman from './Watchman/slice'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: combineReducers({
    watchman: watchman.slice.reducer
  }),
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(function * () {
  yield fork(watchman.saga)
})

export default store
