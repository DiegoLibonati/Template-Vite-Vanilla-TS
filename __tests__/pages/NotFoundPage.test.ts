import { screen } from "@testing-library/dom";

import type { Page } from "@/types/pages";

import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage";

const renderPage = (): Page => {
  const container = NotFoundPage();
  document.body.appendChild(container);
  return container;
};

describe("NotFoundPage", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  describe("render", () => {
    it("should create a main element", () => {
      renderPage();

      const main = screen.getByRole("main");
      expect(main).toBeInTheDocument();
      expect(main.tagName).toBe("MAIN");
    });

    it("should have not-found-page class", () => {
      renderPage();

      const main = screen.getByRole("main");
      expect(main).toHaveClass("not-found-page");
    });

    it("should render title", () => {
      renderPage();

      const title = screen.getByRole("heading", { name: "Not Found Page" });
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass("title");
    });
  });
});
