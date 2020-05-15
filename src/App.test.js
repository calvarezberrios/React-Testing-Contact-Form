import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("filling out the form and submit", async () => {
  const { getByLabelText, getByTestId, getByText } = render(<App />);

  const firstNameInput = getByTestId("firstName");

  await userEvent.type(firstNameInput, "Carlos");

  await userEvent.type(getByTestId("emailInput"), "carlos.alvarezberrios2gmail.com");
  


});
