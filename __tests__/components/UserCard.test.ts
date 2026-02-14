import { screen } from "@testing-library/dom";

import type { User } from "@/types/app";
import type { UserCardComponent } from "@/types/components";

import { UserCard } from "@/components/UserCard/UserCard";

import { mockUser } from "@tests/__mocks__/users.mock";

const renderComponent = (user: User): UserCardComponent => {
  const container = UserCard(user);
  document.body.appendChild(container);
  return container;
};

describe("UserCard Component", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should render user card with correct information", () => {
    renderComponent(mockUser);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("@johndoe")).toBeInTheDocument();
    expect(screen.getByText("📧 john@example.com")).toBeInTheDocument();
    expect(screen.getByText("📞 123-456-7890")).toBeInTheDocument();
    expect(screen.getByText("🌐 johndoe.com")).toBeInTheDocument();
    expect(screen.getByText("🏢 Doe Inc")).toBeInTheDocument();
  });

  it("should render as an article element", () => {
    renderComponent(mockUser);

    const article = document.querySelector<HTMLElement>(".user-card");
    expect(article).toBeInTheDocument();
    expect(article?.tagName).toBe("ARTICLE");
  });
});
