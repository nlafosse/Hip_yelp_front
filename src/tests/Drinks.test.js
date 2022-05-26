import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';

beforeEach(() => {
  act(() => {
    render(<App />)
  })
  const drinkLink = screen.getAllByText("Drinks")[0];
  act(() => {
    fireEvent.click(drinkLink);
  })
})

afterEach(cleanup);

describe('Drink Card Container', () => {
  it('Should Render Drink Card Container', async () => {
    const drinkContainer = screen.getByTestId("drinks-card-container");
    const cardsContainer = screen.queryByTestId("cards");
    expect(drinkContainer).toBeInTheDocument();
    expect(cardsContainer).toBeInTheDocument();
  })
})

describe('Drink Cards', () => {
  it('Cards Should Contain Img And Bar/Lounge Name', async () => {
    let cards;
    await waitFor(async () => {
      cards = await screen.findAllByTestId("card");
    })

    console.log(cards);

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