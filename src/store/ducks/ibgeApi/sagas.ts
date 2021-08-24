import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'estados');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* loadCounties(uf: string) {
  try {
    const response = yield call(api.get, `estados/${uf}`);
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}