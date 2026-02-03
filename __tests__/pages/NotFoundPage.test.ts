import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage";

describe("NotFoundPage", () => {
  describe("render", () => {
    it("should create a main element", () => {
      const page = NotFoundPage();

      expect(page.tagName).toBe("MAIN");
    });

    it("should have not-found-page class", () => {
      const page = NotFoundPage();

      expect(page.className).toBe("not-found-page");
    });

    it("should render title", () => {
      const page = NotFoundPage();

      const title = page.querySelector(".title");
      expect(title).toBeTruthy();
      expect(title?.textContent).toBe("Not Found Page");
    });
  });
});
