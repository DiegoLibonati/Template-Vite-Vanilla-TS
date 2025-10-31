import { StoreMain } from "@src/entities/pages";

import { Link } from "@src/components/Link/Link";
import { Action } from "@src/components/Action/Action";

import { templateStore } from "@src/stores/templateStore";

import "@src/pages/StorePage/StorePage.css";

const addCounter = (value: number = 1) => {
  templateStore.addCounter(value);
};
const subtractCounter = (value: number = 1) => {
  templateStore.subtractCounter(value);
};

export const StorePage = (): HTMLElement => {
  const main = document.createElement("main") as StoreMain;
  main.className = "store-page";

  main.innerHTML = `
    <h1 class="title">Store Page</h1> 

    <div class="counter">
      <h2 class="counter__number">0</h2>
    </div>

    <div class="links"></div>
  `;

  const links = main.querySelector<HTMLDivElement>(".links");
  const counter = main.querySelector<HTMLDivElement>(".counter");
  const counterNumber =
    main.querySelector<HTMLHeadingElement>(".counter__number");

  const linkNotExists = Link({
    id: "link-not-exists",
    ariaLabel: "link-not-exists",
    href: "/#/pasdasdasdasd",
    children: "Go to Not Exists Page",
    target: "_self",
  });
  const actionSubtract = Action({
    id: "counter-subtract",
    ariaLabel: "counter minus 1",
    onClick: () => subtractCounter(),
    className: "counter__subtract",
    children: "-",
  });
  const actionPlus = Action({
    id: "counter-plus",
    ariaLabel: "counter plus 1",
    onClick: () => addCounter(),
    className: "counter__plus",
    children: "+",
  });

  links!.append(linkNotExists);
  counter?.append(actionPlus);
  counter?.insertBefore(actionSubtract, counterNumber);

  const renderCounter = () => {
    const { counter } = templateStore.getState();

    const counterNumber =
      document.querySelector<HTMLHeadingElement>(".counter__number");

    counterNumber!.textContent = String(counter);
  };

  templateStore.subscribe("counter", renderCounter);

  main.cleanup = () => {
    templateStore.restartCounter();
  };

  return main;
};
