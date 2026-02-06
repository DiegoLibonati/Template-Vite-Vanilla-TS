import type { ActionProps } from "@/types/props";
import type { ActionElement } from "@/types/components";

import "@/components/Action/Action.css";

export const Action = ({
  id,
  ariaLabel,
  children,
  className,
  onClick,
}: ActionProps): ActionElement => {
  const action = document.createElement("button") as ActionElement;
  action.id = id;
  action.className = `action ${className ?? ""}`.trim();
  action.setAttribute("aria-label", ariaLabel);

  action.innerHTML = children ?? "";

  const handleClick = (e: MouseEvent): void => {
    onClick(e, id);
  };

  action.addEventListener("click", handleClick);

  action.cleanup = (): void => {
    action.removeEventListener("click", handleClick);
  };

  return action;
};
