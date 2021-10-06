import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import App from "./App";

it("renders title", () => {
  render(<App />);
  const linkElement = screen.getByText(/T I P P E R/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders app", () => {
  const div = document.createElement("div");
  render(<App />, div);
  expect(unmountComponentAtNode(div));
});
