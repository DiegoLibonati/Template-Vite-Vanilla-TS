import { ProductPage } from "@/pages/ProductPage/ProductPage";

describe("ProductPage", () => {
  describe("render", () => {
    it("should create a main element", () => {
      const page = ProductPage();

      expect(page.tagName).toBe("MAIN");
    });

    it("should have product-page class", () => {
      const page = ProductPage();

      expect(page.className).toBe("product-page");
    });

    it("should render title with product id", () => {
      const page = ProductPage({ id: "123" });

      const title = page.querySelector(".title");
      expect(title).toBeTruthy();
      expect(title?.textContent).toContain("123");
    });

    it("should render links container", () => {
      const page = ProductPage();

      const links = page.querySelector(".links");
      expect(links).toBeTruthy();
    });

    it("should render actions container", () => {
      const page = ProductPage();

      const actions = page.querySelector(".actions");
      expect(actions).toBeTruthy();
    });
  });

  describe("with params", () => {
    it("should display product id from params", () => {
      const page = ProductPage({ id: "456" });

      const title = page.querySelector(".title");
      expect(title?.textContent).toContain("456");
    });
  });
});
