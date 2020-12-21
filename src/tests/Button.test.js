import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  it('renders a <button>', () => {
    const wrapper = shallow(<Button>Teste</Button>);
    expect(wrapper.type()).toBe('button'); 
  });

  it('passes `children` through to the <button>', () => {
    const text = 'Button text';
    const wrapper = shallow(<Button>{text}</Button>);
    expect(wrapper.prop('children')).toBe(text);
  });
});