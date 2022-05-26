import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';

beforeEach(() => {
  act(() => {
    render(<App />)
  })
  const foodLink = screen.getAllByText("Food")[0];
  act(() => {
    fireEvent.click(foodLink);
  })
})

afterAll(cleanup);

describe('Food Card Container', () => {
  it('Should Render Food Card Container', async () => {
    const foodContainer = screen.getByTestId("food-card-container");
    const cardsContainer = screen.queryByTestId("cards");
    expect(foodContainer).toBeInTheDocument();
    expect(cardsContainer).toBeInTheDocument();
  })
})

describe('Food Card', () => {
  it('Cards Should Contain Img And Restaurant Name', async () => {
    const cards = await screen.findAllByTestId("card");
    
    cards.forEach(place => {
      const link = place.children[0];
      expect(place.children.length).toBe(1);
      expect(link.children.length).toBe(2);
      expect(link.children[0].className).toBe("card_img");
      expect(link.children[0].src.length).toBeTruthy();
      expect(link.children[1].className).toBe("cards_text");
      expect(link.children[1].innerHTML).toBeTruthy();
    })
  })
})

