import { TemplateStore } from "@/stores/templateStore";

describe("TemplateStore", () => {
  let store: TemplateStore;

  beforeEach(() => {
    store = new TemplateStore({ counter: 0 });
  });

  describe("getState", () => {
    it("should return the current state", () => {
      const state = store.getState();

      expect(state).toEqual({ counter: 0 });
    });
  });

  describe("addCounter", () => {
    it("should increment counter by given value", () => {
      store.addCounter(5);

      expect(store.getState().counter).toBe(5);
    });

    it("should increment counter multiple times", () => {
      store.addCounter(3);
      store.addCounter(2);

      expect(store.getState().counter).toBe(5);
    });
  });

  describe("subtractCounter", () => {
    it("should decrement counter by given value", () => {
      store.addCounter(10);
      store.subtractCounter(3);

      expect(store.getState().counter).toBe(7);
    });
  });

  describe("restartCounter", () => {
    it("should reset counter to zero", () => {
      store.addCounter(10);
      store.restartCounter();

      expect(store.getState().counter).toBe(0);
    });
  });

  describe("subscribe", () => {
    it("should call listener when state changes", () => {
      const listener = jest.fn();
      store.subscribe("counter", listener);

      store.addCounter(5);

      expect(listener).toHaveBeenCalledWith(5);
    });

    it("should return unsubscribe function", () => {
      const listener = jest.fn();
      const unsubscribe = store.subscribe("counter", listener);

      unsubscribe();
      store.addCounter(5);

      expect(listener).not.toHaveBeenCalled();
    });
  });
});
