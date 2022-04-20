import * as actions from './actions';
import { CHANGE_SEARCH_FIELD, REQUEST_CATS_PENDING } from './constants';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  it('change search field', () => {
    const expectedText = 'lol';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: expectedText
    };
    expect(actions.setSearchField(expectedText)).toEqual(expectedAction);
  });

  it('request cats API', () => {
    const store = mockStore();
    store.dispatch(actions.requestCats());
    const action = store.getActions();
    const expectedAction = {
      type: REQUEST_CATS_PENDING
    };
    expect(action[0]).toEqual(expectedAction);
  });
});
