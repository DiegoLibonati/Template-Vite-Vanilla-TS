import { screen } from "@testing-library/dom";

import type { Page } from "@/types/pages";

import { StorePage } from "@/pages/StorePage/StorePage";

import { templateStore } from "@/stores/templateStore";

const renderPage = (): Page => {
  const container = StorePage();
  document.body.appendChild(container);
  return container;
};

describe("StorePage", () => {
  beforeEach(() => {
    templateStore.cleanup();
  });

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

    it("should have store-page class", () => {
      renderPage();

      const main = screen.getByRole("main");
      expect(main).toHaveClass("store-page");
    });

    it("should render title", () => {
      renderPage();

      const title = screen.getByRole("heading", { name: "Store Page" });
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass("title");
    });

    it("should render counter section", () => {
      const page = renderPage();

      const counter = page.querySelector<HTMLDivElement>(".counter");
      expect(counter).toBeInTheDocument();
    });

    it("should render counter number", () => {
      renderPage();

      const counterNumber = screen.getByRole("heading", { name: "0" });
      expect(counterNumber).toBeInTheDocument();
      expect(counterNumber).toHaveClass("counter__number");
    });

    it("should render action buttons", () => {
      const page = renderPage();

      const subtractBtn =
        page.querySelector<HTMLButtonElement>(".counter__subtract");
      const plusBtn = page.querySelector<HTMLButtonElement>(".counter__plus");

      expect(subtractBtn).toBeInTheDocument();
      expect(plusBtn).toBeInTheDocument();
    });
  });

  describe("cleanup", () => {
    it("should have cleanup function", () => {
      const page = renderPage();

      expect(typeof page.cleanup).toBe("function");
    });

    it("should reset counter on cleanup", () => {
      const page = renderPage();
      templateStore.addCounter(10);

      page.cleanup?.();

      expect(templateStore.getState().counter).toBe(0);
    });
  });
});
