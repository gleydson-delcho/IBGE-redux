import { all, takeLatest, takeEvery } from 'redux-saga/effects';

import { IbgeStatesTypes } from './ibgeApi/types';
import { load } from './ibgeApi/sagas';

export default function* rootSaga() {
  return yield all([
    takeEvery(IbgeStatesTypes.LOAD_REQUEST_STATE, load)]
  );
}