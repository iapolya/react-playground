import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';
// redux-mock-store can be used

let wrapper;
beforeEach(() => {
  const mockProps = { searchField: '', onSearchChange: jest.fn(), cats: [], isPending: false };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('expect to render app', () => {
  expect(wrapper).toMatchSnapshot();
});
