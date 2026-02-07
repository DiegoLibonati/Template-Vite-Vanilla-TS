import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import type { ActionProps } from "@/types/props";
import type { ActionComponent } from "@/types/components";

import { Action } from "@/components/Action/Action";

const renderComponent = (props: ActionProps): ActionComponent => {
  const container = Action(props);
  document.body.appendChild(container);
  return container;
};

describe("Action", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  describe("render", () => {
    it("should create a button element", () => {
      renderComponent({
        id: "test-id",
        ariaLabel: "test label",
        onClick: jest.fn(),
      });

      const button = screen.getByRole("button", { name: "test label" });
      expect(button).toBeInTheDocument();
      expect(button.tagName).toBe("BUTTON");
    });

    it("should set correct id", () => {
      renderComponent({
        id: "my-button",
        ariaLabel: "test label",
        onClick: jest.fn(),
      });

      const button = screen.getByRole("button", { name: "test label" });
      expect(button.id).toBe("my-button");
    });

    it("should set aria-label attribute", () => {
      renderComponent({
        id: "test-id",
        ariaLabel: "click me button",
        onClick: jest.fn(),
      });

      const button = screen.getByRole("button", { name: "click me button" });
      expect(button).toHaveAccessibleName("click me button");
    });

    it("should set children as innerHTML", () => {
      renderComponent({
        id: "test-id",
        ariaLabel: "test label",
        onClick: jest.fn(),
        children: "Click Me",
      });

      const button = screen.getByRole("button", { name: "test label" });
      expect(button.innerHTML).toBe("Click Me");
    });

    it("should apply custom className", () => {
      renderComponent({
        id: "test-id",
        ariaLabel: "test label",
        onClick: jest.fn(),
        className: "custom-class",
      });

      const button = screen.getByRole("button", { name: "test label" });
      expect(button).toHaveClass("action", "custom-class");
    });
  });

  describe("onClick", () => {
    it("should call onClick handler when clicked", async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      renderComponent({
        id: "test-id",
        ariaLabel: "test label",
        onClick: handleClick,
      });

      const button = screen.getByRole("button", { name: "test label" });
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("should pass event and id to onClick handler", async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      renderComponent({
        id: "my-button",
        ariaLabel: "test label",
        onClick: handleClick,
      });

      const button = screen.getByRole("button", { name: "test label" });
      await user.click(button);

      expect(handleClick).toHaveBeenCalledWith(
        expect.any(MouseEvent),
        "my-button"
      );
    });
  });

  describe("cleanup", () => {
    it("should remove click event listener", async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      const action = renderComponent({
        id: "test-id",
        ariaLabel: "test label",
        onClick: handleClick,
      });

      action.cleanup?.();

      const button = screen.getByRole("button", { name: "test label" });
      await user.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
