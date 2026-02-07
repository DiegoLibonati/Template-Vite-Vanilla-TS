import { screen } from "@testing-library/dom";

import type { Page } from "@/types/pages";

import { HomePage } from "@/pages/HomePage/HomePage";

const renderPage = (): Page => {
  const container = HomePage();
  document.body.appendChild(container);
  return container;
};

describe("HomePage", () => {
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

    it("should have home-page class", () => {
      renderPage();

      const main = screen.getByRole("main");
      expect(main).toHaveClass("home-page");
    });

    it("should render title", () => {
      renderPage();

      const title = screen.getByRole("heading", { name: "Home Page" });
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass("title");
    });

    it("should render links container", () => {
      const page = renderPage();

      const links = page.querySelector<HTMLDivElement>(".links");
      expect(links).toBeInTheDocument();
    });

    it("should contain navigation links", () => {
      renderPage();

      const links = screen.getAllByRole("link");
      expect(links.length).toBeGreaterThan(0);
    });
  });
});
