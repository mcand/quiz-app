import React from 'react';
import { shallow } from 'enzyme';
import { Question } from '../../Components/Question';
import { QuestionContainer } from '../../Components/Question/styles';
import Button from '@material-ui/core/Button';

describe('Question', () => {
  let wrapper;

  const questions = [{'id':133274,'answer':'Merino','question':"(Kelly of the Clue Crew reads from the Tobruk Sheep Station in Australia.)  Australia's wool industry, producing one-fourth of the world's supply, began about 200 years ago with the importing of this breed of sheep, originally from Spain",'value':800,'airdate':'2012-05-31T12:00:00.000Z','created_at':'2015-01-22T02:20:06.377Z','updated_at':'2015-01-22T02:20:06.377Z','category_id':14877,'game_id':3908,'invalid_count':null,'category':{'id':14877,'title':'sheep','created_at':'2014-02-14T02:40:01.249Z','updated_at':'2014-02-14T02:40:01.249Z','clues_count':10}}]

  beforeEach(() => {
    wrapper = shallow(<Question points={0} round={1} questions={questions}/>)
  });

  it('renders a submit Button', () => {
    expect(wrapper.find(Button).prop('children')).toBe('Submit')
  });

  it('renders the QuestionContainer', () => {
    expect(wrapper.find(QuestionContainer).length).toBe(1);
  });
});
