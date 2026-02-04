import { UsersPage } from "@/pages/UsersPage/UsersPage";
import { userService } from "@/services/userService";
import { mockUsers } from "@tests/__mocks__/users.mock";

jest.mock("@/services/userService");

const mockedUserService = userService as jest.Mocked<typeof userService>;

const waitForAsync = (): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, 0));

describe("UsersPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = "";
  });

  describe("render", () => {
    it("should create a main element", () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      const page = UsersPage();

      expect(page.tagName).toBe("MAIN");
    });

    it("should have users-page class", () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      const page = UsersPage();

      expect(page.className).toBe("users-page");
    });

    it("should render title", () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      const page = UsersPage();
      document.body.appendChild(page);

      const title = page.querySelector(".title");

      expect(title).toBeInTheDocument();
      expect(title?.textContent).toBe("Users Page");
    });

    it("should show loading state initially", () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      const page = UsersPage();
      document.body.appendChild(page);

      const loading = page.querySelector(".loading");

      expect(loading).toBeInTheDocument();
      expect(loading?.textContent).toBe("Loading users...");
    });

    it("should render link to home page", () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      const page = UsersPage();
      document.body.appendChild(page);

      const link = page.querySelector("#link-home");

      expect(link).toBeInTheDocument();
    });
  });

  describe("data fetching", () => {
    it("should call userService.getAll on mount", () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      UsersPage();

      expect(mockedUserService.getAll).toHaveBeenCalledTimes(1);
    });

    it("should render user cards after loading", async () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      const page = UsersPage();
      document.body.appendChild(page);

      await waitForAsync();

      const userCards = page.querySelectorAll(".user-card");

      expect(userCards).toHaveLength(2);
    });

    it("should display user names after loading", async () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      const page = UsersPage();
      document.body.appendChild(page);

      await waitForAsync();

      expect(page.innerHTML).toContain("John Doe");
      expect(page.innerHTML).toContain("Jane Smith");
    });

    it("should remove loading state after data loads", async () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      const page = UsersPage();
      document.body.appendChild(page);

      await waitForAsync();

      const loading = page.querySelector(".loading");

      expect(loading).not.toBeInTheDocument();
    });

    it("should show error message when fetch fails", async () => {
      mockedUserService.getAll.mockRejectedValue(new Error("Network error"));

      const page = UsersPage();
      document.body.appendChild(page);

      await waitForAsync();

      const error = page.querySelector(".error");

      expect(error).toBeInTheDocument();
      expect(error?.textContent).toBe("Error loading users. Please try again.");
    });
  });

  describe("cleanup", () => {
    it("should have cleanup function", () => {
      mockedUserService.getAll.mockResolvedValue(mockUsers);

      const page = UsersPage();

      expect(typeof page.cleanup).toBe("function");
    });
  });
});
