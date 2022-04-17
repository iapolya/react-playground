import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('expect to render card button component', () => {
  expect(shallow(<CounterButton />)).toMatchSnapshot();
});

it('increment counter', () => {
  const wrapper = shallow(<CounterButton />);
  wrapper.find('button').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });
});
