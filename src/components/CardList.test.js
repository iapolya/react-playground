import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expect to render card list component', () => {
  const mockCats = [
    {
      id: 1,
      name: 'name1',
      email: 'email1'
    },
    {
      id: 2,
      name: 'name2',
      email: 'email2'
    }
  ];
  expect(shallow(<CardList cats={mockCats} />)).toMatchSnapshot();
});
