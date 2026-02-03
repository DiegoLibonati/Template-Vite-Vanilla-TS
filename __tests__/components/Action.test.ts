import { Action } from "@/components/Action/Action";

describe("Action", () => {
  describe("render", () => {
    it("should create a button element", () => {
      const action = Action({
        id: "test-id",
        ariaLabel: "test label",
        onClick: jest.fn(),
      });

      expect(action.tagName).toBe("BUTTON");
    });

    it("should set correct id", () => {
      const action = Action({
        id: "my-button",
        ariaLabel: "test label",
        onClick: jest.fn(),
      });

      expect(action.id).toBe("my-button");
    });

    it("should set aria-label attribute", () => {
      const action = Action({
        id: "test-id",
        ariaLabel: "click me button",
        onClick: jest.fn(),
      });

      expect(action.getAttribute("aria-label")).toBe("click me button");
    });

    it("should set children as innerHTML", () => {
      const action = Action({
        id: "test-id",
        ariaLabel: "test label",
        onClick: jest.fn(),
        children: "Click Me",
      });

      expect(action.innerHTML).toBe("Click Me");
    });

    it("should apply custom className", () => {
      const action = Action({
        id: "test-id",
        ariaLabel: "test label",
        onClick: jest.fn(),
        className: "custom-class",
      });

      expect(action.className).toContain("action");
      expect(action.className).toContain("custom-class");
    });
  });

  describe("onClick", () => {
    it("should call onClick handler when clicked", () => {
      const handleClick = jest.fn();
      const action = Action({
        id: "test-id",
        ariaLabel: "test label",
        onClick: handleClick,
      });

      action.click();

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("should pass event and id to onClick handler", () => {
      const handleClick = jest.fn();
      const action = Action({
        id: "my-button",
        ariaLabel: "test label",
        onClick: handleClick,
      });

      action.click();

      expect(handleClick).toHaveBeenCalledWith(
        expect.any(MouseEvent),
        "my-button"
      );
    });
  });

  describe("cleanup", () => {
    it("should remove click event listener", () => {
      const handleClick = jest.fn();
      const action = Action({
        id: "test-id",
        ariaLabel: "test label",
        onClick: handleClick,
      });

      action.cleanup();
      action.click();

      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
