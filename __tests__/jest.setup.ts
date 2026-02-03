import "@testing-library/jest-dom";

import { mocksLocalStorage } from "@tests/jest.constants";

Object.defineProperty(globalThis, "localStorage", {
  value: {
    getItem: mocksLocalStorage.getItem,
    setItem: mocksLocalStorage.setItem,
    removeItem: mocksLocalStorage.removeItem,
    clear: mocksLocalStorage.clear,
  },
});

beforeEach(() => {
  jest.clearAllMocks();
});
