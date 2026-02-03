import type { TemplateState } from "@/types/states";

import { Store } from "@/core/store";

export class TemplateStore extends Store<TemplateState> {
  // constructor(initialState: TemplateState) {
  //   super(initialState);
  // }

  // Your reducers

  public addCounter(value: number): void {
    const { counter } = this.getState();
    this.setState({ counter: counter + value });
  }

  public subtractCounter(value: number): void {
    const { counter } = this.getState();
    this.setState({ counter: counter - value });
  }

  public restartCounter(): void {
    this.setState({ counter: 0 });
  }
}

export const templateStore = new TemplateStore({
  counter: 0,
});
