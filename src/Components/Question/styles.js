import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
      fontSize: 30,
      color: 'white',
    },
    '& .MuiButtonBase-root': {
      width: '100%',
    },
  },
}));

export const Title = styled.h2`
  font-size: 30px;
  text-align: center;
`;

export const QuestionContainer = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

export const QuestionHeader = styled.div`
  background-color: #337ab7;
  width: 60%;
  color: white; 
  font-size: 30px;
  min-height: 120px;
  padding: 10px;
  text-align: center;
  margin-bottom: 100px;
`;

export const QuestionCount = styled.div`
  background-color: #ffffff;
  color: black;
  display: block;
  padding: 10px;
`;

export const Points = styled.div`
  color: white;
  background-color: #0b0d22;
  font-size: 25px;
  display: flex;
  justify-content: space-around;
`;

export const QuestionBody = styled.div`
  padding: 20px;
  width: 60%;
  background-color: #337ab7;
`;

export const Answer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  input {
    width: 100%;
    font-size: 30px;
    height: 40px;
    border: 0;
    background-color: white;
    padding: 10px;
    margin-bottom: 40px;
    &:focus {
      outline: none;
    }
  }
`;

export const QuestionCategory = styled.h3`
  font-size: 20px;
  margin: 10px 0;
`;