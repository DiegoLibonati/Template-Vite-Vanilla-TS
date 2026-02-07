import type { User } from "@/types/app";
import type { UserCardComponent } from "@/types/components";

import "@/components/UserCard/UserCard.css";

export const UserCard = (user: User): UserCardComponent => {
  const card = document.createElement("article") as UserCardComponent;
  card.className = "user-card";

  card.innerHTML = `
    <h3 class="user-card__name">${user.name}</h3>
    <p class="user-card__username">@${user.username}</p>
    <p class="user-card__info">📧 ${user.email}</p>
    <p class="user-card__info">📞 ${user.phone}</p>
    <p class="user-card__info">🌐 ${user.website}</p>
    <p class="user-card__company">🏢 ${user.company.name}</p>
  `;

  return card;
};
