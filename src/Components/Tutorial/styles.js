import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 42px;
  padding: 10px;
  margin: 0;
  text-align: center;
`;

export const Welcome = styled.div`
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
`;

export const WelcomeContainer = styled.div`
  font-size: 15px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

export const RuleList = styled.ol`
  margin-top: 130px;
  list-style: none;
  padding: 0;
  font-weight: normal;
  font-style: italic;
  text-align: left;
`;

export const Rule = styled.li`
  padding: 10px 0;
  margin: 0;
`;