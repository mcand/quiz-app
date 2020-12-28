import React from 'react';
import { shallow } from 'enzyme';
import { Title } from '../../Components/Result/styles';
import { Result } from '../../Components/Result';
import Button from '@material-ui/core/Button';

describe('Result', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Result points={10} />);
  });

  it('renders the Result', () => {
    expect(wrapper.find(Title).prop('children')).toBe('Result');
  });

  it('renders the Restart Button', () => {
    expect(wrapper.find(Button).prop('children')).toBe('Restart');
  });
});
