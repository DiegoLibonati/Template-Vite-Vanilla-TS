import { templateStore } from "@/stores/templateStore";

describe("TemplateStore", () => {
  beforeEach(() => {
    templateStore.restartCounter();
  });

  it("should have initial counter value of 0", () => {
    expect(templateStore.get("counter")).toBe(0);
  });

  it("should add to counter", () => {
    templateStore.addCounter(5);

    expect(templateStore.get("counter")).toBe(5);
  });

  it("should subtract from counter", () => {
    templateStore.addCounter(10);
    templateStore.subtractCounter(3);

    expect(templateStore.get("counter")).toBe(7);
  });

  it("should restart counter to 0", () => {
    templateStore.addCounter(100);
    templateStore.restartCounter();

    expect(templateStore.get("counter")).toBe(0);
  });

  it("should cleanup and reset state", () => {
    templateStore.addCounter(50);
    templateStore.cleanup();

    expect(templateStore.get("counter")).toBe(0);
  });
});
