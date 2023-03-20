import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import renderWithRouterAndRedux, { renderWithRouter } from './renderWithRouterAndRedux';

describe('Testando Login', () => {
  test('Testa elementos da tela inicial', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailLogin = screen.getByTestId('input-gravatar-email');
    const nameLogin = screen.getByTestId('input-player-name');
    const buttonPlay = screen.getByRole('button', { name: 'Play' });
    const buttonConfig = screen.getByRole('button', { name: 'Configurações' });
    const buttons = screen.getAllByRole('button');
    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('alt', 'logo');
    expect(image).toHaveAttribute('src', 'trivia.png');
    expect(buttons).toHaveLength(2);

    expect(emailLogin).toBeInTheDocument();
    expect(nameLogin).toBeInTheDocument();
    expect(buttonPlay).toBeInTheDocument();
    expect(buttonConfig).toBeInTheDocument();
    expect(buttonPlay).toBeDisabled();

    userEvent.type(emailLogin, 'test');
    expect(buttonPlay).toBeDisabled();
    userEvent.clear(emailLogin);
    userEvent.type(nameLogin, 'test');
    expect(buttonPlay).toBeDisabled();
    userEvent.clear(nameLogin);
    userEvent.type(emailLogin, 'test');
    userEvent.type(nameLogin, 'test');
    expect(buttonPlay).not.toBeDisabled();
    expect(buttonConfig).not.toBeDisabled();

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('testando botão Configurações', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const buttonConfig = screen.getByRole('button', { name: 'Configurações' });

    userEvent.click(buttonConfig);
    
    const { pathname } = history.location;
    expect(pathname).toBe('/config');
    const settings = screen.getByTestId('settings-title');
    await waitFor(() => expect(settings).toBeInTheDocument());
  });

  test('testando botão Play', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const buttonPlay = screen.getByTestId('btn-play');
    const emailLogin = screen.getByTestId('input-gravatar-email');
    const nameLogin = screen.getByTestId('input-player-name');

    userEvent.type(emailLogin, 'test');
    userEvent.type(nameLogin, 'test');
    userEvent.click(buttonPlay);

    jest.spyOn(Storage.prototype, 'setItem');
    Storage.prototype.setItem = jest.fn();

    await waitFor(() => expect(localStorage.setItem).toHaveBeenCalledTimes(1));

    const { pathname } = history.location;
    expect(pathname).toBe('/game');
  });
});