import { UserCard } from "@/components/UserCard/UserCard";

import { mockUser } from "@tests/__mocks__/users.mock";

describe("UserCard", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  describe("render", () => {
    it("should create an article element", () => {
      const card = UserCard(mockUser);

      expect(card.tagName).toBe("ARTICLE");
    });

    it("should have user-card class", () => {
      const card = UserCard(mockUser);

      expect(card.className).toBe("user-card");
    });

    it("should display user name", () => {
      const card = UserCard(mockUser);
      document.body.appendChild(card);

      const name = card.querySelector(".user-card__name");

      expect(name).toBeInTheDocument();
      expect(name?.textContent).toBe("John Doe");
    });

    it("should display username with @ prefix", () => {
      const card = UserCard(mockUser);
      document.body.appendChild(card);

      const username = card.querySelector(".user-card__username");

      expect(username).toBeInTheDocument();
      expect(username?.textContent).toBe("@johndoe");
    });

    it("should display user email", () => {
      const card = UserCard(mockUser);

      expect(card.innerHTML).toContain("john@example.com");
    });

    it("should display user phone", () => {
      const card = UserCard(mockUser);

      expect(card.innerHTML).toContain("123-456-7890");
    });

    it("should display user website", () => {
      const card = UserCard(mockUser);

      expect(card.innerHTML).toContain("johndoe.com");
    });

    it("should display company name", () => {
      const card = UserCard(mockUser);
      document.body.appendChild(card);

      const company = card.querySelector(".user-card__company");

      expect(company).toBeInTheDocument();
      expect(company?.textContent).toContain("Doe Inc");
    });
  });
});
