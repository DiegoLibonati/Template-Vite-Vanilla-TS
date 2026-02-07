export interface Component {
  cleanup?: () => void;
}

export interface ActionComponent extends Component, HTMLButtonElement {}
export interface LinkComponent extends Component, HTMLAnchorElement {}
export interface UserCardComponent extends Component, HTMLElement {}
