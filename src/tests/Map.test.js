import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';

beforeEach(() => {
  act(() => {
    render(<App />)
  })
  const mapLink = screen.getAllByText("Map")[0];
  act(() => {
    fireEvent.click(mapLink);
  })
})

afterAll(cleanup);

describe("Map", () => {
  it("Map Should Render", async () => {
    let mapbox;

    await waitFor(async () => {
      mapbox = await screen.findByTestId("mapbox-container");
    }, { timeout: 2000 })
    expect(mapbox).toBeInTheDocument();
  })
})