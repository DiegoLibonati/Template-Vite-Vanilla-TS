import type { PageElement } from "@/types/pages";

import { StorePage } from "@/pages/StorePage/StorePage";
import { templateStore } from "@/stores/templateStore";

describe("StorePage", () => {
  beforeEach(() => {
    templateStore.restartCounter();
  });

  describe("render", () => {
    it("should create a main element", () => {
      const page = StorePage();

      expect(page.tagName).toBe("MAIN");
    });

    it("should have store-page class", () => {
      const page = StorePage();

      expect(page.className).toBe("store-page");
    });

    it("should render title", () => {
      const page = StorePage();

      const title = page.querySelector(".title");
      expect(title).toBeTruthy();
      expect(title?.textContent).toBe("Store Page");
    });

    it("should render counter section", () => {
      const page = StorePage();

      const counter = page.querySelector(".counter");
      expect(counter).toBeTruthy();
    });

    it("should render counter number", () => {
      const page = StorePage();

      const counterNumber = page.querySelector(".counter__number");
      expect(counterNumber).toBeTruthy();
      expect(counterNumber?.textContent).toBe("0");
    });

    it("should render action buttons", () => {
      const page = StorePage();

      const subtractBtn = page.querySelector(".counter__subtract");
      const plusBtn = page.querySelector(".counter__plus");

      expect(subtractBtn).toBeTruthy();
      expect(plusBtn).toBeTruthy();
    });
  });

  describe("cleanup", () => {
    it("should have cleanup function", () => {
      const page = StorePage() as PageElement;

      expect(typeof page.cleanup).toBe("function");
    });

    it("should reset counter on cleanup", () => {
      const page = StorePage() as PageElement;
      templateStore.addCounter(10);

      page.cleanup?.();

      expect(templateStore.getState().counter).toBe(0);
    });
  });
});
