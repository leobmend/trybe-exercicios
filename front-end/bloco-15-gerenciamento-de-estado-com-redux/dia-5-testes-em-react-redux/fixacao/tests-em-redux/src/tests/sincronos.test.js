import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const randomInitialCounter = Math.floor(Math.random() * 100);
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: randomInitialCounter }}});

    expect(screen.getByText(randomInitialCounter)).toBeInTheDocument();

    const buttonAdicionar = screen.queryByText('Clique aqui');
    userEvent.click(buttonAdicionar);
    expect(screen.getByText(randomInitialCounter + 1)).toBeInTheDocument();
  });
});