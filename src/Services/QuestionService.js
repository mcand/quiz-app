import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://jservice.io/api/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export default {
  getQuestions(numberOfQuestions = 30) {
    return apiClient.get(`/random?count=${numberOfQuestions}`);
  },
};
