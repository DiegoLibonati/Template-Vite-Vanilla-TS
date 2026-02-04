import type { PageElement } from "@/types/pages";

import { Link } from "@/components/Link/Link";
import { UserCard } from "@/components/UserCard/UserCard";
import { userService } from "@/services/userService";

import "@/pages/UsersPage/UsersPage.css";

export const UsersPage = (): PageElement => {
  const mainElement = document.createElement("main");
  mainElement.className = "users-page";

  mainElement.innerHTML = `
    <h1 class="title">Users Page</h1>
    <div class="users-list">
      <p class="loading">Loading users...</p>
    </div>
    <div class="links"></div>
  `;

  const usersList = mainElement.querySelector<HTMLDivElement>(".users-list");
  const links = mainElement.querySelector<HTMLDivElement>(".links");

  const linkHome = Link({
    id: "link-home",
    ariaLabel: "link-home",
    href: "/#/home",
    children: "Go to Home Page",
    target: "_self",
  });

  if (links) {
    links.appendChild(linkHome);
  }

  const loadUsers = async (): Promise<void> => {
    try {
      const users = await userService.getAll();

      if (usersList) {
        usersList.innerHTML = "";
        users.forEach((user) => {
          usersList.appendChild(UserCard(user));
        });
      }
    } catch {
      if (usersList) {
        usersList.innerHTML =
          '<p class="error">Error loading users. Please try again.</p>';
      }
    }
  };

  void loadUsers();

  const main = mainElement as PageElement;

  main.cleanup = (): void => {
    // No event listeners to clean up
  };

  return main;
};
