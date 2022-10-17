import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import Ranking from './Ranking';
import { BrowserRouter as Router } from 'react-router-dom';
import User from '../../models';
import UserService from '../../services/UserService';
import UserInterface from '../../interfaces';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

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

const setup = (n: number) => {
  for (let i = 1; i <= n; i++) {
    const user = new User();
    user.name = `user${i}`;
    user.score = i;
    user.save();
  }
};

it('render Ranking', () => {
  const n = 5;
  setup(n);

  act(() => {
    render(
      <Router>
        <Ranking/>
      </Router>
    );
  });

  const text = screen.getByText('Ranking');
  expect(text).toBeInTheDocument();

  const trs = document.getElementsByTagName('tr') as HTMLCollection;
  expect(trs.length).toEqual(n + 1);
});

it('check order Ranking', () => {
  const n = 5;
  setup(n);

  act(() => {
    render(
      <Router>
        <Ranking/>
      </Router>
    );
  });

  const trs = document.getElementsByTagName('tr') as HTMLCollection;
  expect(trs.length).toEqual(n + 1);

  const user = new User();
  const users = UserService.getUsers(user.STORAGE_KEY) as UserInterface[];
  for (let i = 1; i < trs.length; i++) {
    const tr = trs.item(i) as HTMLTableRowElement;
    const lastTd = tr.lastChild as HTMLTableCellElement;
    const maxScore = lastTd.textContent as string;

    expect(parseInt(maxScore)).toEqual(users[n - i].maxScore);
  }
});
