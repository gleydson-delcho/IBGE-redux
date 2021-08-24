import { Reducer } from 'redux';
import { IbgeState, IbgeStatesTypes } from './types';

const INITIAL_STATE: IbgeState = {
  data: [],
  uf: '',
  error: false,
  loading: false,
};

const reducerState: Reducer<IbgeState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IbgeStatesTypes.LOAD_REQUEST_STATE:
      return { ...state, loading: true };
    case IbgeStatesTypes.LOAD_STATES_STATE:
      return {
      ...state, loading: false, error: false, data: action.payload.data
      };
    case IbgeStatesTypes.LOAD_SET_STATE:
      return {
      ...state, loading: false, error: false, data: action.payload.uf
      };
    case IbgeStatesTypes.LOAD_FAILURE_STATE:
      return {
      ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducerState;