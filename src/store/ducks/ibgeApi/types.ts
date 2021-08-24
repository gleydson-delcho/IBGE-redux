/**
 * Action types
 */
 export enum IbgeStatesTypes {
    LOAD_REQUEST_STATE = '@ibgeApi/LOAD_REQUEST_STATE ',
    LOAD_STATES_STATE  = '@ibgeApi/LOAD_STATES_STATE ',
    LOAD_FAILURE_STATE  = '@ibgeApi/LOAD_FAILURE_STATE ',
    LOAD_SET_STATE  = '@ibgeApi/LOAD_SET_STATE '  
  }
  
  /**
   * Data types
   */
  export interface StateItem {
    id: number
    sigla: string
  }
  
  export interface CountieItem {
    id: number
    nome: string  
  }
  
  /**
   * State type
   */
  export interface IbgeState {
    readonly data: StateItem[]
    readonly uf: string
    readonly loading: boolean
    readonly error: boolean
  }
  