import { action } from 'typesafe-actions';
import { IbgeStatesTypes, StateItem } from './types';

export const loadRequest = () => action(IbgeStatesTypes.LOAD_REQUEST_STATE);

export const loadSuccess = (data: StateItem[]) => action(IbgeStatesTypes.LOAD_STATES_STATE, { data });

export const loadFailure = () => action(IbgeStatesTypes.LOAD_FAILURE_STATE);

export const setState = (uf: any) => action(IbgeStatesTypes.LOAD_SET_STATE, uf );