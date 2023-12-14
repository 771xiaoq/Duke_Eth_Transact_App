import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders logo", () => {
    render(<Navbar />);
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();
  });

  test("renders navigation items", () => {
    render(<Navbar />);
    const marketLink = screen.getByText("Market");
    const uniswapLink = screen.getByText("Uniswap Exchange");
    const tutorialsLink = screen.getByText("Tutorials");
    const walletsLink = screen.getByText("Wallets-Metamask");

    expect(marketLink).toBeInTheDocument();
    expect(uniswapLink).toBeInTheDocument();
    expect(tutorialsLink).toBeInTheDocument();
    expect(walletsLink).toBeInTheDocument();
  });

  test("toggles menu on click", () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText("toggle-menu");
    const closeButton = screen.getByLabelText("close-menu");

    expect(menuButton).toBeInTheDocument();
    expect(closeButton).not.toBeInTheDocument();

    menuButton.click();

    expect(closeButton).toBeInTheDocument();
    expect(menuButton).not.toBeInTheDocument();

    closeButton.click();

    expect(menuButton).toBeInTheDocument();
    expect(closeButton).not.toBeInTheDocument();
  });
});