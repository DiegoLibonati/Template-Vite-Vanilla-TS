import { Action } from "@src/components/Action/Action";
import { Link } from "@src/components/Link/Link";

import "@src/pages/ProductPage/ProductPage.css";

const alertProductId = (e: MouseEvent, id: string, idProduct: string) => {
  console.log("Event: ", e);
  console.log("Action ID: ", id);
  alert(`Product ID: ${idProduct}`);
};

export const ProductPage = (params?: Record<string, string>): HTMLElement => {
  const productId = params?.id;

  console.log("Product ID: ", productId);

  const main = document.createElement("main");
  main.className = "product-page";

  main.innerHTML = `
    <h1 class="title">Product Page: ${productId}</h1>

    <div class="links"></div>

    <div class="actions"></div> 
  `;

  const links = main.querySelector<HTMLDivElement>(".links");
  const actions = main.querySelector<HTMLDivElement>(".actions");

  const actionProductId = Action({
    id: "action-product-id",
    ariaLabel: "action-product-id",
    children: "Click Product Id",
    onClick: (e, id) => alertProductId(e, id, productId!),
  });

  const linkNotExists = Link({
    id: "link-not-exists",
    ariaLabel: "link-not-exists",
    href: "/#/pasdasdasdasd",
    children: "Go to Not Exists Page",
    target: "_self",
  });

  links!.append(linkNotExists);
  actions!.append(actionProductId);

  return main;
};
