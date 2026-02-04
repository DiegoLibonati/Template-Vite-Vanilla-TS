import { getLocalStorage } from "@/helpers/getLocalStorage";

import { mocksLocalStorage } from "@tests/__mocks__/localStorage.mock";

describe("getLocalStorage", () => {
  describe("when item exists", () => {
    it("should return parsed JSON value", () => {
      const mockData = { name: "test", value: 123 };
      mocksLocalStorage.getItem.mockReturnValue(JSON.stringify(mockData));

      const result = getLocalStorage("testKey");

      expect(mocksLocalStorage.getItem).toHaveBeenCalledWith("testKey");
      expect(result).toEqual(mockData);
    });
  });

  describe("when item does not exist", () => {
    it("should return null", () => {
      mocksLocalStorage.getItem.mockReturnValue(null);

      const result = getLocalStorage("nonExistentKey");

      expect(mocksLocalStorage.getItem).toHaveBeenCalledWith("nonExistentKey");
      expect(result).toBeNull();
    });
  });
});
