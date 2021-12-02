import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CATS_PENDING,
  REQUEST_CATS_FAILED,
  REQUEST_CATS_SUCCESS
} from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_CATS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
      dispatch({ type: REQUEST_CATS_SUCCESS, payload: users });
    })
    .catch((error) => dispatch({ type: REQUEST_CATS_FAILED, payload: error }));
};
