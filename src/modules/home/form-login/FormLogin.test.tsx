import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import FormLogin from './FormLogin';

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

it('render FormLogin', () => {
  act(() => {
    render(<FormLogin/>);
  });
  const name = screen.getByLabelText('Name');
  expect(name).toBeInTheDocument();

  const btnJoin = document.querySelector('button.btn-join');
  expect(btnJoin?.textContent).toBe('JOIN');
});
