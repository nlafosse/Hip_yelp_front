import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

beforeEach(() => render(<App />))

afterEach(cleanup);

describe('Title', () => {
  it('Should Render "Travlr" Title', () => {
    expect(screen.getByText(/Travlr/i)).toBeInTheDocument();
  })
});

describe('Navigation', () => {
  it('Should Render Navigation', () => {
    //Fetches Header and Footer Navigation
    const headerNav = screen.getByTestId("header-nav");
    const footerNav = screen.getByTestId("footer-nav");
    //Tests header navigation
    expect(headerNav).toBeInTheDocument();
    expect(headerNav.children.length).toBe(5);
    expect(headerNav.children[0].text).toBe("Home");
    expect(headerNav.children[1].text).toBe("Food");
    expect(headerNav.children[2].text).toBe("Drinks");
    expect(headerNav.children[3].text).toBe("Map");
    expect(headerNav.children[4].text).toBe("Add New");

    //Tests footer navigation
    expect(screen.getByTestId("footer-nav")).toBeInTheDocument();
    expect(footerNav.children.length).toBe(2);
    expect(footerNav.children[0].text).toBe("Home");
    expect(footerNav.children[1].text).toBe("About");
  })
});

describe('Categories', () => {
  //Tests food and drink categories
  it('Renders Food and Drinks', () => {
    const foodSelect = screen.getByTestId("food-route");
    const drinkSelect = screen.getByTestId("drink-route");

    expect(foodSelect).toBeInTheDocument();
    expect(drinkSelect).toBeInTheDocument();

    expect(foodSelect.children[0].innerHTML).toBe("Food")
    expect(drinkSelect.children[0].innerHTML).toBe("Drinks")
  })
});

describe('Images', () => {
  //Tests if images load
  it('Renders Images for Landing Page', () => {
    const foodImg = screen.getByAltText("example food option");
    const drinkImg = screen.getByAltText("example drink option");

    expect(foodImg).toBeInTheDocument();
    expect(drinkImg).toBeInTheDocument();

    expect(foodImg.src).toContain('https://assets3.thrillist.com/v1/image/1880039/2880x3000/scale;jpeg_quality=60;progressive.jpg');
    expect(drinkImg.src).toContain('https://noseychef.com/wp-content/uploads/2018/12/IMG_4280123.jpg');
  })
})
