import { screen } from "@testing-library/dom";

import type { Page } from "@/types/pages";

import { AboutPage } from "@/pages/AboutPage/AboutPage";

const renderPage = (): Page => {
  const container = AboutPage();
  document.body.appendChild(container);
  return container;
};

describe("AboutPage", () => {
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

    it("should have about-page class", () => {
      renderPage();

      const main = screen.getByRole("main");
      expect(main).toHaveClass("about-page");
    });

    it("should render title", () => {
      renderPage();

      const title = screen.getByRole("heading", { name: "About Page" });
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass("title");
    });

    it("should render links container", () => {
      const page = renderPage();

      const links = page.querySelector<HTMLDivElement>(".links");
      expect(links).toBeInTheDocument();
    });
  });
});
