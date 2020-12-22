import React from 'react';
import { shallow } from 'enzyme';
import Quiz from '../Components/Quiz';

describe('Quiz', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Quiz />);
  });

  it('renders the quiz', () => {
    expect(wrapper.find('h2').prop('children')).toBe('Quiz');
  });
});
