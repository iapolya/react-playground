import { CHANGE_SEARCH_FIELD, REQUEST_CATS_PENDING, REQUEST_CATS_FAILED } from './constants';

import * as reducers from './reducers';

describe('searchCats', () => {
  it('initial state', () => {
    expect(reducers.searchCats(undefined, {})).toEqual(reducers.initialStateSearch);
  });

  it('CHANGE_SEARCH_FIELD', () => {
    let newSearchValue = 'test';
    expect(
      reducers.searchCats(reducers.initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: newSearchValue
      })
    ).toEqual({
      searchField: newSearchValue
    });
  });
});

describe('requestCats', () => {
  it('initial state', () => {
    expect(reducers.requestCats(undefined, {})).toEqual(reducers.initialStateCats);
  });

  it('pending', () => {
    expect(reducers.requestCats(reducers.initialStateCats, { type: REQUEST_CATS_PENDING })).toEqual(
      {
        ...reducers.initialStateCats,
        isPending: true
      }
    );
  });

  it('failed', () => {
    expect(
      reducers.requestCats(reducers.initialStateCats, {
        type: REQUEST_CATS_FAILED,
        payload: 'error'
      })
    ).toEqual({
      ...reducers.initialStateCats,
      error: 'error'
    });
  });
});
