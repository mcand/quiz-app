import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';
import Quiz from '../Components/Quiz';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders a <Quiz>', () => {
    expect(wrapper.find(Quiz).length).toBe(1);
  });
});
