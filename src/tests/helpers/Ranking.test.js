import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../../App';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';


describe('Testando Ranking', () => {
  test('Testa elementos da tela de ranking', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    act(() => {
      history.push('/ranking')
    })
    
    const titleRankinf = screen.getByTestId('ranking-title');
    const playAgain = screen.getByTestId('btn-go-home');

    expect(titleRankinf).toBeInTheDocument();
    expect(playAgain).toBeInTheDocument();

    userEvent.click(playAgain);
    const { pathname } = history.location;
    await waitFor(() => expect(pathname).toBe('/'));
  });
});