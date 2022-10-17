import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Game from './Game';
import User from '../../models';
import Session from '../../libs/Session';
import UserAutenticateContext, { session } from '../../contexts/UserAutenticateContext';

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  });
});

it('render Game', () => {
  const name = 'user';
  const user = new User();
  user.name = name;
  user.save();

  session.name = name;
  session.autenticate = true;

  Session.autenticate(name);

  act(() => {
    render(
      <UserAutenticateContext.Provider value={{
        session,
        setUserAutenticate: (session) => {
        }
      }}>
        <Router>
          <Game/>
        </Router>
      </UserAutenticateContext.Provider>
    );
  });

  const textHighScore = screen.getByText(/High Score/i);
  expect(textHighScore).toBeInTheDocument();
  const btnRight = document.querySelector('button.btn-next-step-right');
  expect(btnRight?.textContent).toBe('RIGHT');
  const btnLeft = document.querySelector('button.btn-next-step-left');
  expect(btnLeft?.textContent).toBe('LEFT');
});
