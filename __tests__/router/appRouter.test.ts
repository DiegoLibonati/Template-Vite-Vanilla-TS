import { renderRoute, initRouter } from "@/router/appRouter";

jest.mock("@/constants/envs", () => ({
  default: {
    redirectIfRouteNotExists: false,
  },
}));

describe("appRouter", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    window.location.hash = "";
  });

  describe("renderRoute", () => {
    it("should redirect to /home when no hash is present", () => {
      window.location.hash = "";

      renderRoute();

      expect(window.location.hash).toBe("#/home");
    });

    it("should render HomePage for /home route", () => {
      window.location.hash = "#/home";

      renderRoute();

      const app = document.querySelector<HTMLDivElement>("#app");
      expect(app?.querySelector<HTMLElement>(".home-page")).toBeTruthy();
    });

    it("should render AboutPage for /about route", () => {
      window.location.hash = "#/about";

      renderRoute();

      const app = document.querySelector<HTMLDivElement>("#app");
      expect(app?.querySelector<HTMLElement>(".about-page")).toBeTruthy();
    });

    it("should render StorePage for /store route", () => {
      window.location.hash = "#/store";

      renderRoute();

      const app = document.querySelector<HTMLDivElement>("#app");
      expect(app?.querySelector<HTMLElement>(".store-page")).toBeTruthy();
    });

    it("should render ProductPage with params for /products/:id route", () => {
      window.location.hash = "#/products/123";

      renderRoute();

      const app = document.querySelector<HTMLDivElement>("#app");
      expect(app?.querySelector<HTMLElement>(".product-page")).toBeTruthy();
    });

    it("should render NotFoundPage for /error route", () => {
      window.location.hash = "#/error";

      renderRoute();

      const app = document.querySelector<HTMLDivElement>("#app");
      expect(app?.querySelector<HTMLElement>(".not-found-page")).toBeTruthy();
    });
  });

  describe("initRouter", () => {
    it("should add hashchange event listener", () => {
      const addEventListenerSpy = jest.spyOn(window, "addEventListener");

      initRouter();

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        "hashchange",
        expect.any(Function)
      );

      addEventListenerSpy.mockRestore();
    });

    it("should call renderRoute on init", () => {
      window.location.hash = "#/home";

      initRouter();

      const app = document.querySelector<HTMLDivElement>("#app");
      expect(app?.children.length).toBeGreaterThan(0);
    });
  });
});
