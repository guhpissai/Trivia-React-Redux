import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from '../tests/helpers/renderWithRouterAndRedux';

describe('Testando Login', () => {
  test('Testa elementos da tela inicial', () => {
    const { history } = renderWithRouter(<App />);

    const emailLogin = screen.getByTestId('input-gravatar-email');
    const nameLogin = screen.getByTestId('input-player-name');
    const buttonPlay = screen.getByRole('button', { name: 'Play' });
    const image = screen.getAllByRole('img');

    expect(image).toHaveAttribute('alt', 'logo');
    expect(emailLogin).toBeInTheDocument();
    expect(nameLogin).toBeInTheDocument();
    expect(buttonPlay).toBeInTheDocument();
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

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
});
