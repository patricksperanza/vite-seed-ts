import { render, screen } from "@testing-library/react"
import App from "./App"

it("should render App", () => {
  render(<App />)
  const message = screen.getByText(/app/i)
  expect(message).toBeInTheDocument()
})
