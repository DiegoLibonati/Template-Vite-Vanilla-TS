import { screen } from "@testing-library/dom";

import type { User } from "@/types/app";

import { UserCard } from "@/components/UserCard/UserCard";

import { mockUser } from "@tests/__mocks__/users.mock";

const renderComponent = (user: User): HTMLElement => {
  const container = UserCard(user);
  document.body.appendChild(container);
  return container;
};

describe("UserCard", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  describe("render", () => {
    it("should create an article element", () => {
      renderComponent(mockUser);

      const article = screen.getByRole("article");
      expect(article).toBeInTheDocument();
      expect(article.tagName).toBe("ARTICLE");
    });

    it("should have user-card class", () => {
      renderComponent(mockUser);

      const article = screen.getByRole("article");
      expect(article).toHaveClass("user-card");
    });

    it("should display user name", () => {
      renderComponent(mockUser);

      const name = screen.getByRole("heading", { name: "John Doe" });
      expect(name).toBeInTheDocument();
      expect(name).toHaveClass("user-card__name");
    });

    it("should display username with @ prefix", () => {
      renderComponent(mockUser);

      const username = screen.getByText("@johndoe");
      expect(username).toBeInTheDocument();
      expect(username).toHaveClass("user-card__username");
    });

    it("should display user email", () => {
      renderComponent(mockUser);

      const email = screen.getByText(/john@example\.com/i);
      expect(email).toBeInTheDocument();
      expect(email).toHaveClass("user-card__info");
    });

    it("should display user phone", () => {
      renderComponent(mockUser);

      const phone = screen.getByText(/123-456-7890/i);
      expect(phone).toBeInTheDocument();
      expect(phone).toHaveClass("user-card__info");
    });

    it("should display user website", () => {
      renderComponent(mockUser);

      const website = screen.getByText(/johndoe\.com/i);
      expect(website).toBeInTheDocument();
      expect(website).toHaveClass("user-card__info");
    });

    it("should display company name", () => {
      renderComponent(mockUser);

      const company = screen.getByText(/Doe Inc/i);
      expect(company).toBeInTheDocument();
      expect(company).toHaveClass("user-card__company");
    });
  });
});
