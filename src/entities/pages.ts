export interface PageElement extends HTMLElement {
  cleanup?: () => void;
}

export interface StoreMain extends PageElement {}
