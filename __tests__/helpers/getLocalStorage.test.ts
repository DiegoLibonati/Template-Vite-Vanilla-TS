import { getLocalStorage } from "@/helpers/getLocalStorage";

describe("getLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("should return parsed data when key exists", () => {
    const testData = { name: "test", value: 123 };
    localStorage.setItem("test-key", JSON.stringify(testData));

    const result = getLocalStorage("test-key");

    expect(result).toEqual(testData);
  });

  it("should return null when key does not exist", () => {
    const result = getLocalStorage("non-existent-key");

    expect(result).toBeNull();
  });
});
