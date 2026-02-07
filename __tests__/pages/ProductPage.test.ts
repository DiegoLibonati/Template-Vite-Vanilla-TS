import { screen } from "@testing-library/dom";

import type { Page } from "@/types/pages";

import { ProductPage } from "@/pages/ProductPage/ProductPage";

const renderPage = (params?: { id?: string }): Page => {
  const container = ProductPage(params);
  document.body.appendChild(container);
  return container;
};

describe("ProductPage", () => {
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

    it("should have product-page class", () => {
      renderPage();

      const main = screen.getByRole("main");
      expect(main).toHaveClass("product-page");
    });

    it("should render title with product id", () => {
      renderPage({ id: "123" });

      const title = screen.getByRole("heading", { name: /123/i });
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass("title");
    });

    it("should render links container", () => {
      const page = renderPage();

      const links = page.querySelector<HTMLDivElement>(".links");
      expect(links).toBeInTheDocument();
    });

    it("should render actions container", () => {
      const page = renderPage();

      const actions = page.querySelector<HTMLDivElement>(".actions");
      expect(actions).toBeInTheDocument();
    });
  });

  describe("with params", () => {
    it("should display product id from params", () => {
      renderPage({ id: "456" });

      const title = screen.getByRole("heading", { name: /456/i });
      expect(title).toBeInTheDocument();
    });
  });
});
