import { render, screen } from "@testing-library/react";
import App from "./App";
import { it, expect } from "vitest";

it("should have hello", () => {
  render(<App />);
  const message = screen.getByText("hello");
  expect(message).toBeInTheDocument();
});
