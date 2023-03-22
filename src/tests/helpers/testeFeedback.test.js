import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../../App';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';

// const sleep = (milliseconds) => (
//   new Promise((resolve) => setTimeout(resolve, milliseconds))); 
describe('Testando Feedback', () => {
  test('Testa elementos da tela de feedback', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    act(() => {
      history.push('/feedback')
    })
    
    const gravatarImg = screen.getByTestId('header-profile-picture');
    const namePlayer = screen.getByTestId('header-player-name');
    const score = screen.getByTestId('header-score');
    const questionsOk = screen.getByTestId('feedback-total-question');
    const textFeedback = screen.getByTestId('feedback-text');
    const scoreFeed = screen.getByTestId('feedback-total-score');


    
    const buttonPlayAgain = screen.getByRole('button', { name: 'Play Again' });
    const buttonRanking = screen.getByRole('button', { name: 'Ver Ranking' });
    const buttons = screen.getAllByRole('button');

   
    expect(buttons).toHaveLength(2);
    expect(gravatarImg).toBeInTheDocument();
    expect(namePlayer).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(questionsOk).toBeInTheDocument();
    expect(textFeedback).toBeInTheDocument();
    expect(scoreFeed).toBeInTheDocument();
    expect(buttonPlayAgain).toBeInTheDocument();
    expect(buttonRanking).toBeInTheDocument();

    expect(buttonPlayAgain).toBeEnabled();
    expect(buttonRanking).toBeEnabled();

    userEvent.click(buttonPlayAgain);
    const { pathname } = history.location;
    await waitFor(() => expect(pathname).toBe('/'));
    
  });

  test('Testa elementos da tela de feedback', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    act(() => {
      history.push('/feedback')
    })
    
    const buttonRanking = screen.getByRole('button', { name: 'Ver Ranking' });
    expect(buttonRanking).toBeInTheDocument();
    expect(buttonRanking).toBeEnabled();

    userEvent.click(buttonRanking);
    const { pathname } = history.location;
    await waitFor(() => expect(pathname).toBe('/ranking'));
    
  });
});