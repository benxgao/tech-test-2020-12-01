/* eslint-disable no-constant-condition */

import { take, put, call, fork, select, takeEvery, takeLatest, all } from 'redux-saga/effects';
import {GET_HORSE_LIST, RECEIVE_HORSE_LIST} from '../actions';
import { horsesApi } from '../services/horses';

export function* getHorses() {
  const horseList = yield call(horsesApi.getHorseList);

  yield put({ type: RECEIVE_HORSE_LIST, payload: horseList });
};

export function* watchGetHorses() {
  yield takeLatest(GET_HORSE_LIST, getHorses);
};

export default function* root() {
  yield all([
    fork(watchGetHorses),
  ]);
};
