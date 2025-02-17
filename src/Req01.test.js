import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./componentes/menu/Menu"; // Adjust the import based on your file structure

describe("Menu Component", () => {
  test("renders menu items correctly", () => {
    render(<Menu />);
    const menuItem = screen.getByText(/Home/i);
    expect(menuItem).toBeInTheDocument();
  });

  test("menu has correct number of items", () => {
    render(<Menu />);
    const menuItems = screen.getAllByRole("menuitem");
    expect(menuItems.length).toBe(3); // Adjust the number based on your menu items
  });

  test("menu item click navigates correctly", () => {
    render(<Menu />);
    const menuItem = screen.getByText(/About/i);
    menuItem.click();
    expect(window.location.pathname).toBe("/about"); // Adjust the path based on your routing
  });
});
