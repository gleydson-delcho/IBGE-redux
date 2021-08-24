import { AxiosRequestConfig } from 'axios';
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';


export function* load() {
  try {
    const response: AxiosRequestConfig = yield call(api.get, 'estados');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
