import { userService } from "@/services/userService";

import { mockUser, mockUsers } from "@tests/__mocks__/users.mock";

describe("userService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should fetch all users successfully", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockUsers),
      });

      const users = await userService.getAll();

      expect(fetch).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/users"
      );
      expect(users).toEqual(mockUsers);
      expect(users).toHaveLength(2);
    });

    it("should throw error when response is not ok", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500,
      });

      await expect(userService.getAll()).rejects.toThrow(
        "HTTP error! status: 500"
      );
    });

    it("should throw error when fetch fails", async () => {
      global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

      await expect(userService.getAll()).rejects.toThrow("Network error");
    });
  });

  describe("getById", () => {
    it("should fetch user by id successfully", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockUser),
      });

      const user = await userService.getById(1);

      expect(fetch).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      expect(user).toEqual(mockUser);
    });

    it("should throw error when user not found", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 404,
      });

      await expect(userService.getById(999)).rejects.toThrow(
        "HTTP error! status: 404"
      );
    });
  });
});
