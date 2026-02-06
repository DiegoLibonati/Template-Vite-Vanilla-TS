import { screen } from "@testing-library/dom";

import type { LinkProps } from "@/types/props";

import { Link } from "@/components/Link/Link";

const renderComponent = (props: LinkProps): HTMLAnchorElement => {
  const container = Link(props);
  document.body.appendChild(container);
  return container;
};

describe("Link", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  describe("render", () => {
    it("should create an anchor element", () => {
      renderComponent({
        id: "test-id",
        href: "/test",
        ariaLabel: "test label",
      });

      const link = screen.getByRole("link", { name: "test label" });
      expect(link).toBeInTheDocument();
      expect(link.tagName).toBe("A");
    });

    it("should set correct id", () => {
      renderComponent({
        id: "my-link",
        href: "/test",
        ariaLabel: "test label",
      });

      const link = screen.getByRole("link", { name: "test label" });
      expect(link.id).toBe("my-link");
    });

    it("should set href attribute", () => {
      renderComponent({
        id: "test-id",
        href: "/about",
        ariaLabel: "test label",
      });

      const link = screen.getByRole("link", { name: "test label" });
      expect(link).toHaveAttribute("href", "/about");
    });

    it("should set aria-label attribute", () => {
      renderComponent({
        id: "test-id",
        href: "/test",
        ariaLabel: "go to about page",
      });

      const link = screen.getByRole("link", { name: "go to about page" });
      expect(link).toHaveAccessibleName("go to about page");
    });

    it("should set children as innerHTML", () => {
      renderComponent({
        id: "test-id",
        href: "/test",
        ariaLabel: "test label",
        children: "Click Here",
      });

      const link = screen.getByRole("link", { name: "test label" });
      expect(link.innerHTML).toBe("Click Here");
    });

    it("should apply custom className", () => {
      renderComponent({
        id: "test-id",
        href: "/test",
        ariaLabel: "test label",
        className: "custom-link",
      });

      const link = screen.getByRole("link", { name: "test label" });
      expect(link).toHaveClass("link", "custom-link");
    });
  });

  describe("target", () => {
    it("should default to _blank when no target provided", () => {
      renderComponent({
        id: "test-id",
        href: "/test",
        ariaLabel: "test label",
      });

      const link = screen.getByRole("link", { name: "test label" });
      expect(link).toHaveAttribute("target", "_blank");
    });

    it("should use provided target", () => {
      renderComponent({
        id: "test-id",
        href: "/test",
        ariaLabel: "test label",
        target: "_self",
      });

      const link = screen.getByRole("link", { name: "test label" });
      expect(link).toHaveAttribute("target", "_self");
    });
  });
});
