import React from 'react';
import { shallow } from 'enzyme';
import { Quiz } from '../../Components/Quiz';
import { Tutorial } from '../../Components/Tutorial';

describe('Quiz', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Quiz round={0} ended={false} />);
  });

  it('renders the Quiz', () => {
    expect(wrapper.find(Tutorial).length).toBe(0);
  });
});
