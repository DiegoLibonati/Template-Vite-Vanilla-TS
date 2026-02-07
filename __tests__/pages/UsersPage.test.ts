import { screen, waitFor } from "@testing-library/dom";

import type { Page } from "@/types/pages";

import { UsersPage } from "@/pages/UsersPage/UsersPage";

import { userService } from "@/services/userService";

import { mockUsers } from "@tests/__mocks__/users.mock";

jest.mock("@/services/userService");

const mockedUserService = userService as jest.Mocked<typeof userService>;

const renderPage = (): Page => {
  const container = UsersPage();
  document.body.appendChild(container);
  return container;
};

describe("UsersPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  describe("render", () => {
    it("should create a main element", () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      renderPage();

      const main = screen.getByRole("main");
      expect(main).toBeInTheDocument();
      expect(main.tagName).toBe("MAIN");
    });

    it("should have users-page class", () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      renderPage();

      const main = screen.getByRole("main");
      expect(main).toHaveClass("users-page");
    });

    it("should render title", () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      renderPage();

      const title = screen.getByRole("heading", { name: "Users Page" });
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass("title");
    });

    it("should show loading state initially", () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      renderPage();

      const loading = screen.getByText("Loading users...");
      expect(loading).toBeInTheDocument();
      expect(loading).toHaveClass("loading");
    });

    it("should render link to home page", () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      renderPage();

      const link = screen.getByRole("link", { name: /home/i });
      expect(link).toBeInTheDocument();
      expect(link.id).toBe("link-home");
    });
  });

  describe("data fetching", () => {
    it("should call userService.getAll on mount", () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      renderPage();

      expect(mockedUserService.getAll).toHaveBeenCalledTimes(1);
    });

    it("should render user cards after loading", async () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      renderPage();

      const userCards = await screen.findAllByRole("article");
      expect(userCards).toHaveLength(2);
    });

    it("should display user names after loading", async () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      renderPage();

      const johnDoe = await screen.findByText("John Doe");
      const janeSmith = await screen.findByText("Jane Smith");

      expect(johnDoe).toBeInTheDocument();
      expect(janeSmith).toBeInTheDocument();
    });

    it("should remove loading state after data loads", async () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      renderPage();

      await waitFor(() => {
        expect(screen.queryByText("Loading users...")).not.toBeInTheDocument();
      });
    });

    it("should show error message when fetch fails", async () => {
      mockedUserService.getAll.mockRejectedValue(new Error("Network error"));

      renderPage();

      const error = await screen.findByText(
        "Error loading users. Please try again."
      );
      expect(error).toBeInTheDocument();
      expect(error).toHaveClass("error");
    });
  });

  describe("cleanup", () => {
    it("should have cleanup function", () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      const page = renderPage();

      expect(typeof page.cleanup).toBe("function");
    });
  });
});
