export const getTriviaToken = async () => {
  const URL = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const getTriviaQuestions = async () => {
  const token = await getTriviaToken();
  const URL = `https://opentdb.com/api.php?amount=5&token=${token.token}`;
  const response = await fetch(URL);
  const data = response.json();
  return data;
};
