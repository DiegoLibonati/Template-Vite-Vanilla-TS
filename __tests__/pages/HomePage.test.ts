import { HomePage } from "@/pages/HomePage/HomePage";

describe("HomePage", () => {
  describe("render", () => {
    it("should create a main element", () => {
      const page = HomePage();

      expect(page.tagName).toBe("MAIN");
    });

    it("should have home-page class", () => {
      const page = HomePage();

      expect(page.className).toBe("home-page");
    });

    it("should render title", () => {
      const page = HomePage();

      const title = page.querySelector(".title");
      expect(title).toBeTruthy();
      expect(title?.textContent).toBe("Home Page");
    });

    it("should render links container", () => {
      const page = HomePage();

      const links = page.querySelector(".links");
      expect(links).toBeTruthy();
    });

    it("should contain navigation links", () => {
      const page = HomePage();

      const links = page.querySelectorAll("a");
      expect(links.length).toBeGreaterThan(0);
    });
  });
});
