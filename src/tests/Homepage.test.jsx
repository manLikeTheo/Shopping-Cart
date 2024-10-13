import { render, screen } from "@testing-library/react";
import HomePage from "../Pages/Home/HomePage.jsx";
import { it, expect, describe } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { L } from "vitest/dist/chunks/reporters.C_zwCd4j";

describe("HomePage", () => {
  it("renders correct heading", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading");
    expect(heading).toMatch(/Welcome to the/i);
  });
});
