import { render, screen } from '@testing-library/react';
import {App} from '../App';
import {Provider} from "react-redux";
import {store} from "../Redux/ReduxStore";
import React from 'react'

test('renders social in header', () => {
  render(
      <Provider store={store}>
          <App />
      </Provider>
  );
  const socialWord = screen.getByText(/social/i);
  expect(socialWord).toBeInTheDocument();
});
