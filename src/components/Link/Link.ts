import { LinkProps } from "@src/entities/props";

import "@src/components/Link/Link.css";

export const Link = ({
  id,
  href,
  target,
  ariaLabel,
  children,
  className,
}: LinkProps): HTMLAnchorElement => {
  const a = document.createElement("a");
  a.id = id;
  a.href = href;
  a.target = target ?? "_blank";
  a.className = `link ${className ?? ""}`;
  a.setAttribute("aria-label", ariaLabel);

  a.innerHTML = children ?? "";

  return a;
};
