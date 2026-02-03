export interface PageElement extends HTMLElement {
  cleanup?: () => void;
}

export type StoreMain = PageElement;
