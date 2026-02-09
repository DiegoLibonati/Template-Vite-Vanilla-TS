import type { User } from "@/types/app";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const userService = {
  getAll: async (): Promise<User[]> => {
    const response = await fetch(`${API_BASE_URL}/users`);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const users: User[] = (await response.json()) as User[];

    return users;
  },

  getById: async (id: number): Promise<User> => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const user: User = (await response.json()) as User;

    return user;
  },
};
