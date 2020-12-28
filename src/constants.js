export const QUESTIONS_NUMBER = 3;

const pointsArray = () => {
  let points = [];
  for (let i = 0; i < QUESTIONS_NUMBER; i++) {
    if (i == 0) {
      points[i] = 1;
    } else {
      points[i] = points[i - 1] * 2;
    }
  }
  return points;
};

export const POINTS_ARRAY = pointsArray();
