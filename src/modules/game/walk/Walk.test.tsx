import React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import Walk from './Walk';
import User from '../../../models';

it('render Walk', () => {
  const user = new User();
  const trafficLight = false;
  const setUser = (user: User) => {
  };

  act(() => {
    render(<Walk
      trafficLight={trafficLight}
      user={user}
      setUser={setUser}
    />);
  });

  const btnRight = document.querySelector('button.btn-next-step-right');
  expect(btnRight?.textContent).toBe('RIGHT');
  const btnLeft = document.querySelector('button.btn-next-step-left');
  expect(btnLeft?.textContent).toBe('LEFT');
});

it('to Walk', () => {
  let user = new User();
  const trafficLight = true;
  const setUser = (newUser: User) => {
    user = new User(newUser.toJson());
  };

  act(() => {
    render(<Walk
      trafficLight={trafficLight}
      user={user}
      setUser={setUser}
    />);
  });

  const btnRight = document.querySelector('button.btn-next-step-right');
  const btnLeft = document.querySelector('button.btn-next-step-left');

  const n = 10;
  for (let i = 0; i < n; i++) {
    act(() => {
      btnRight?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    act(() => {
      btnLeft?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
  }
  expect(user.score).toEqual(n * 2);
  expect(user.maxScore).toEqual(n * 2);
});

it('to Back', () => {
  let user = new User();
  const trafficLight = true;
  const setUser = (newUser: User) => {
    user = new User(newUser.toJson());
  };

  act(() => {
    render(<Walk
      trafficLight={trafficLight}
      user={user}
      setUser={setUser}
    />);
  });

  const btnRight = document.querySelector('button.btn-next-step-right');
  const btnLeft = document.querySelector('button.btn-next-step-left');

  const n = 10;
  const back = 3;
  for (let i = 0; i < n; i++) {
    act(() => {
      btnRight?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    act(() => {
      btnLeft?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
  }

  for (let i = 0; i < back; i++) {
    act(() => {
      btnRight?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
  }
  expect(user.score).toEqual(n * 2 - 1);
  expect(user.maxScore).toEqual(n * 2 + 1);
});
