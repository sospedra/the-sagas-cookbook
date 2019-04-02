import { createSlice } from 'redux-starter-kit'
import { call, fork, put, delay } from 'redux-saga/effects'
import * as api from 'services/api'

export const slice = createSlice({
  slice: 'watchman',
  initialState: {
    payment: [],
    warehouse: [],
    delivery: [],
    latest: [],
  },
  reducers: {
    fetch: state => state,
    setWatchers: (state, action) => action.payload
  }
})


const pool = function * () {
  while (true) {
    const watchers = yield call(api.watchman)
    yield put(slice.actions.setWatchers(watchers))
    yield delay(500)
  }
}

export const saga = function * () {
  yield fork(pool)
}
