import { render, screen, cleanup } from '@testing-library/react';
import FoodForm from '../Components/Forms/Form';

beforeEach(() => render(<FoodForm />))
afterEach(cleanup);

describe('FoodForm', () => {
  it('Should Load FoodForm Component', () => {
    const formContainer = screen.getByTestId('food-form-container')
    expect(formContainer).toBeInTheDocument();
  })

  it('Should Render "Add A Hotspot" Title', () => {
    const formTitle = screen.getByText(/Add A Hotspot/i);
    expect(formTitle).toBeInTheDocument();
  })

  it('Should Render Six TextBoxes', () => {
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(6);
  })

  it('Should Render Three ComboBoxes', () => {
    const inputs = screen.getAllByRole("combobox");
    expect(inputs.length).toBe(3);
  })

  it('Should Render Twenty Nine CheckBoxes', () => {
    const inputs = screen.getAllByRole("checkbox");
    expect(inputs.length).toBe(29);
  })

  it('Should Render Submit Button', () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  })
})