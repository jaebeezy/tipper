import { render, screen } from "@testing-library/react";
import InputBar from "./inputbar";

it("renders input bar label correctly", () => {
  render(<InputBar label="my label" />);
  const inputLabel = screen.getByText(/my label/i);
  expect(inputLabel).toBeInTheDocument();
});

it("renders input bar label correctly", () => {
  render(<InputBar label="my label" />);
  const inputLabel = screen.getByRole("heading");
  expect(inputLabel).toBeInTheDocument();
});
