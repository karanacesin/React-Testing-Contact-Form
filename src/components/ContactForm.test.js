import React from "react";
import { render, fireEvent, screen} from "@testing-library/react";
import ContactForm from './ContactForm'

test("renders correctly", () => {
    render(<ContactForm />);
  });

test("ContactForm adds new contacts", () => {
  render(<ContactForm />);
  
  const firstNameInput = screen.getByLabelText(/first Name/i);
  const lastNameInput = screen.getByLabelText(/last Name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submitButton = screen.getByText(/submit/i);

  fireEvent.change(firstNameInput,{
      target: {value: 'dawna'}
  });

  fireEvent.change(lastNameInput, {
      target: {value: 'backmeier'}
  });

  fireEvent.change(emailInput, {
      target: {value: 'karanacesin@yahoo.com'}
  });

  fireEvent.change(messageInput, {
      target: {value: 'Hey everyone!'}
  });

  fireEvent.click(submitButton);

  const newContact = screen.getAllByText(/first name/i)

  
})