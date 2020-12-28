import QuestionService from '../../Services/QuestionService';

describe('QuestionService', () => {

  it('should get by default 30 questions', () => {
    return QuestionService.getQuestions().then(res => {
      expect(res.data.length).toBe(30);
    });
  });

  it('should get the number of questions requested', () => {
    return QuestionService.getQuestions(10).then(res => {
      expect(res.data.length).toBe(10);
    });
  });
  
  it('should have question, answer and category attribute for question', () => {
    return QuestionService.getQuestions(1).then( res => {
      expect(res.data[0].question).toBeDefined();
      expect(res.data[0].answer).toBeDefined();
      expect(res.data[0].category).toBeDefined();
    });      
  });
});
