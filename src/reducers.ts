import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CATS_PENDING,
  REQUEST_CATS_FAILED,
  REQUEST_CATS_SUCCESS
} from './constants';
import { ICat } from './types';

export interface Action {
  type: string;
  payload: string;
}

export interface ISearchState {
  searchField: string;
}

export const initialStateSearch = {
  searchField: ''
};

export const searchCats = (state = initialStateSearch, action: Action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export interface ICatsState {
  isPending: boolean;
  error: null | string;
  cats: Array<ICat>;
}

export const initialStateCats = {
  isPending: false,
  error: null,
  cats: []
};

export const requestCats = (state = initialStateCats, action: Action) => {
  switch (action.type) {
    case REQUEST_CATS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_CATS_SUCCESS:
      return { ...state, cats: action.payload, isPending: false };
    case REQUEST_CATS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
