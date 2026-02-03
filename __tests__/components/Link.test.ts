import { Link } from "@/components/Link/Link";

describe("Link", () => {
  describe("render", () => {
    it("should create an anchor element", () => {
      const link = Link({
        id: "test-id",
        href: "/test",
        ariaLabel: "test label",
      });

      expect(link.tagName).toBe("A");
    });

    it("should set correct id", () => {
      const link = Link({
        id: "my-link",
        href: "/test",
        ariaLabel: "test label",
      });

      expect(link.id).toBe("my-link");
    });

    it("should set href attribute", () => {
      const link = Link({
        id: "test-id",
        href: "/about",
        ariaLabel: "test label",
      });

      expect(link.href).toContain("/about");
    });

    it("should set aria-label attribute", () => {
      const link = Link({
        id: "test-id",
        href: "/test",
        ariaLabel: "go to about page",
      });

      expect(link.getAttribute("aria-label")).toBe("go to about page");
    });

    it("should set children as innerHTML", () => {
      const link = Link({
        id: "test-id",
        href: "/test",
        ariaLabel: "test label",
        children: "Click Here",
      });

      expect(link.innerHTML).toBe("Click Here");
    });

    it("should apply custom className", () => {
      const link = Link({
        id: "test-id",
        href: "/test",
        ariaLabel: "test label",
        className: "custom-link",
      });

      expect(link.className).toContain("link");
      expect(link.className).toContain("custom-link");
    });
  });

  describe("target", () => {
    it("should default to _blank when no target provided", () => {
      const link = Link({
        id: "test-id",
        href: "/test",
        ariaLabel: "test label",
      });

      expect(link.target).toBe("_blank");
    });

    it("should use provided target", () => {
      const link = Link({
        id: "test-id",
        href: "/test",
        ariaLabel: "test label",
        target: "_self",
      });

      expect(link.target).toBe("_self");
    });
  });
});
