import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("Notification Badge", () => {
  test("if notification shows nothing when passed empty cart", () => {
    render(<App />);
    const badge = screen.getByTestId("noti-badge");
    expect(badge.textContent).toBe("");
  });
});
