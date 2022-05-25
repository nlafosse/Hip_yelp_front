import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';

beforeEach(() => {
  act(() => {
    render(<App />)
  })
  const foodLink = screen.getAllByText("Map")[0];
  act(() => {
    fireEvent.click(foodLink);
  })
})

afterAll(cleanup);