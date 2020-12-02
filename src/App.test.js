import { render, screen } from "@testing-library/react";
import App from "./App";
test("file upload", () => {
  render(<App />);
  const linkElement = screen.getByText(/Statistical/i);
  expect(linkElement).toBeInTheDocument();
});
