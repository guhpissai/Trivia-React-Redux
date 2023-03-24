import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../../App';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';

const sleep = (milliseconds) => (
  new Promise((resolve) => setTimeout(resolve, milliseconds))); 
describe('Testando Game', () => {
  test('Testa elementos da tela de jogo', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailLogin = screen.getByTestId('input-gravatar-email');
    const nameLogin = screen.getByTestId('input-player-name');
    const buttonPlay = screen.getByRole('button', { name: 'Play' });

    userEvent.type(emailLogin, 'test');
    userEvent.type(nameLogin, 'test');

    userEvent.click(buttonPlay);
    await sleep(3000);
    const { pathname } = history.location;
    await waitFor(() => expect(pathname).toBe('/game'));
    
    const gravatarImg = screen.getByTestId('header-profile-picture');
    const namePlayer = screen.getByTestId('header-player-name');
    const score = screen.getByTestId('header-score');
    const questionCateg = screen.getByTestId('question-category');
    const questionText = screen.getByTestId('question-text');
    const optionsAnswer = screen.getByTestId('answer-options');
    const correctAnswer = screen.getByTestId('correct-answer');
    const clock = screen.getByTestId('clock');

    expect(gravatarImg).toBeInTheDocument();
    expect(namePlayer).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(questionCateg).toBeInTheDocument();
    expect(questionText).toBeInTheDocument();
    expect(optionsAnswer).toBeInTheDocument();
    expect(correctAnswer).toBeInTheDocument();
    expect(clock).toBeInTheDocument();

    userEvent.click(correctAnswer);
    // await sleep(5000);
    const buttonNext = screen.getByRole('button', { name: 'Next' });

    await waitFor(() => expect(buttonNext).toBeInTheDocument());

   

    
    
  });
});