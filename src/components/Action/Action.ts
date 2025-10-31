import { ActionProps } from "@src/entities/props";

import "@src/components/Action/Action.css";

export const Action = ({
  id,
  ariaLabel,
  children,
  className,
  onClick,
}: ActionProps): HTMLButtonElement => {
  const action = document.createElement("button");
  action.id = id;
  action.className = `action ${className ?? ""}`;
  action.setAttribute("aria-label", ariaLabel);

  action.innerHTML = children ?? "";

  action.addEventListener("click", (e) => onClick(e, id));

  return action;
};
