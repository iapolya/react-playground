import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('expect to render card component', () => {
  // expect(shallow(<Card />).length).toEqual(1);
  expect(shallow(<Card id={1} email={'Lol'} name={'NAME'} />)).toMatchSnapshot();
});
