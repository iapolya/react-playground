import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CATS_PENDING,
  REQUEST_CATS_FAILED,
  REQUEST_CATS_SUCCESS
} from "./constants";


const initialStateSearch = {
  searchField: ''
};

export const searchCats = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {...state, searchField: action.payload}
    default:
      return state;
  }
};

const initialStateCats = {
  isPending: false,
  error: null,
  cats: []
};

export const requestCats = (state = initialStateCats, action = {}) => {
  switch (action.type) {
    case REQUEST_CATS_PENDING:
      return {...state, isPending: true}
    case REQUEST_CATS_SUCCESS:
      return {...state, cats: action.payload, isPending: false}
    case REQUEST_CATS_FAILED:
      return {...state, error: action.payload, isPending: false}
    default:
      return state;
  }
};