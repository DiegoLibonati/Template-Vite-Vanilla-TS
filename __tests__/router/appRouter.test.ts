import { renderRoute, initRouter } from "@/router/appRouter";

jest.mock("@/constants/envs", () => ({
  __esModule: true,
  default: {
    redirectIfRouteNotExists: false,
  },
}));

describe("Router", () => {
  let appContainer: HTMLDivElement;

  beforeEach(() => {
    appContainer = document.createElement("div");
    appContainer.id = "app";
    document.body.appendChild(appContainer);
    window.location.hash = "";
  });

  afterEach(() => {
    document.body.innerHTML = "";
    window.location.hash = "";
  });

  describe("renderRoute", () => {
    it("should throw error when app container does not exist", () => {
      document.body.innerHTML = "";

      expect(() => {
        renderRoute();
      }).toThrow("You must render a container to mount the app.");
    });

    it("should redirect to home when no hash is present", () => {
      window.location.hash = "";

      renderRoute();

      expect(window.location.hash).toBe("#/home");
    });

    it("should render HomePage for /home route", () => {
      window.location.hash = "#/home";

      renderRoute();

      const main = appContainer.querySelector<HTMLElement>(".home-page");
      expect(main).toBeInTheDocument();
    });

    it("should render AboutPage for /about route", () => {
      window.location.hash = "#/about";

      renderRoute();

      const main = appContainer.querySelector<HTMLElement>(".about-page");
      expect(main).toBeInTheDocument();
    });

    it("should render ProductPage with params", () => {
      window.location.hash = "#/products/123";

      renderRoute();

      const title = appContainer.querySelector<HTMLHeadingElement>(".title");
      expect(title?.textContent).toBe("Product Page: 123");
    });

    it("should redirect to error route when route does not exist", () => {
      window.location.hash = "#/invalid-route";

      renderRoute();

      expect(window.location.hash).toBe("#/error");
    });

    it("should cleanup previous page before rendering new one", () => {
      const mockCleanup = jest.fn();

      window.location.hash = "#/home";
      renderRoute();

      const currentPage = appContainer.firstElementChild as HTMLElement & {
        cleanup?: () => void;
      };

      currentPage.cleanup = mockCleanup;

      window.location.hash = "#/about";
      renderRoute();

      expect(mockCleanup).toHaveBeenCalled();
    });
  });

  describe("initRouter", () => {
    it("should render initial route", () => {
      window.location.hash = "#/home";

      initRouter();

      const main = appContainer.querySelector<HTMLElement>(".home-page");
      expect(main).toBeInTheDocument();
    });

    it("should listen to hashchange events", () => {
      window.location.hash = "#/home";
      initRouter();

      window.location.hash = "#/about";
      window.dispatchEvent(new HashChangeEvent("hashchange"));

      const main = appContainer.querySelector<HTMLElement>(".about-page");
      expect(main).toBeInTheDocument();
    });
  });
});
