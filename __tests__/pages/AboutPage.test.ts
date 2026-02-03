import { AboutPage } from "@/pages/AboutPage/AboutPage";

describe("AboutPage", () => {
  describe("render", () => {
    it("should create a main element", () => {
      const page = AboutPage();

      expect(page.tagName).toBe("MAIN");
    });

    it("should have about-page class", () => {
      const page = AboutPage();

      expect(page.className).toBe("about-page");
    });

    it("should render title", () => {
      const page = AboutPage();

      const title = page.querySelector(".title");
      expect(title).toBeTruthy();
      expect(title?.textContent).toBe("About Page");
    });

    it("should render links container", () => {
      const page = AboutPage();

      const links = page.querySelector(".links");
      expect(links).toBeTruthy();
    });
  });
});
