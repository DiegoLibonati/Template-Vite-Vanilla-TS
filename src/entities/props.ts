interface DefaultProps {
  className?: string;
  children?: string;
}

export interface LinkProps extends DefaultProps {
  id: string;
  href: string;
  ariaLabel: string;
  target?: string;
}

export interface ActionProps extends DefaultProps {
  id: string;
  ariaLabel: string;
  onClick: (e: MouseEvent, id: string) => void;
}
