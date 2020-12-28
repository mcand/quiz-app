import React from 'react';
import { shallow } from 'enzyme';
import { Tutorial } from '../../Components/Tutorial';
import { Title } from '../../Components/Tutorial/styles';
import Button from '@material-ui/core/Button';

describe('Tutorial', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Tutorial />)
  });

  it('renders the Tutorial', () => {
    expect(wrapper.find(Title).prop('children')).toBe('Quiz Application');
  })

  describe('Restart Button', () => {
    it('renders the restart <Button>', () => {
      expect(wrapper.find(Button).prop('children')).toBe('Start Game')
    })

    it('triggers onGameStart when clicked', () => {
      const handleGameStart = jest.fn();
      let restartButton = shallow(<Button
        onClick={handleGameStart}
        variant='contained'
        color='primary'
        size='large'
      />)
      restartButton.simulate('click');
      expect(handleGameStart).toHaveBeenCalled();
    });

  })

});
