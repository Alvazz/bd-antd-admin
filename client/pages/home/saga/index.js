import createSagaMiddleware from 'redux-saga';
import {
  put,
  takeLatest,
} from 'redux-saga/effects';
import axios from 'client/utils/request';
import actions from '../actions';

// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();

function* fetchHome() {
  const res = yield axios.get('home');
  if (res.statusText === 'OK') {
    yield put(actions.home.fetchSuccess(res.data));
  } else {
    yield put(actions.home.fetchFailed(res.statusText || 'Request Error'));
  }
}


function* changeBorder() {
  // const res = yield axios.get('home');
  // if (res.statusText === 'OK') {
  //   yield put(actions.home.fetchSuccess(res.data));
  // } else {
  //   yield put(actions.home.fetchFailed(res.statusText || 'Request Error'));
  // }
  yield put(actions.common.noBorder(true));
  console.log('changeBorder');
}
// function* createUser({ payload: { data } }) {
//   const res = yield axios.post('user', data);
//   if (res.statusText === 'Created') {
//     yield put(actions.user.createSuccess(res.data));
//     yield put(actions.user.hideModal());
//   }
// }

// function* deleteUser({ payload: { user } }) {
//   yield axios.delete(`user/${user._id}`);
//   yield put(actions.user.deleteFromList(user));
// }

function* saga() {
  yield takeLatest(actions.dashboard.fetch, fetchHome);
  // yield takeLatest(actions.common.noBorder, changeBorder);
  // yield takeLatest(actions.user.create, createUser);
  // yield takeLatest(actions.user.delete, deleteUser);
}

// entry point
export const run = () => {
  sagaMiddleware.run(saga);
};

export default {
  saga,
  sagaMiddleware,
  run,
};
