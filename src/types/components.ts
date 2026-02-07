export interface Component {
  cleanup?: () => void;
}

export interface ActionComponent extends Component, HTMLButtonElement {}
