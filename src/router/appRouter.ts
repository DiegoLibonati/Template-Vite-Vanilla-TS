import { PageElement } from "@src/entities/pages";
import { MatchRoute, Route } from "@src/entities/router";

import { HomePage } from "@src/pages/HomePage/HomePage";
import { AboutPage } from "@src/pages/AboutPage/AboutPage";
import { ProductPage } from "@src/pages/ProductPage/ProductPage";
import { NotFoundPage } from "@src/pages/NotFoundPage/NotFoundPage";
import { StorePage } from "@src/pages/StorePage/StorePage";

import envs from "@src/constants/envs";

const PRINCIPAL_ROUTE = "/home";
const ERROR_ROUTE = "/error";
const REDIRECT_IF_ROUTE_NOT_EXISTS = envs.redirectIfRouteNotExists;

const routes: Route[] = [
  { path: PRINCIPAL_ROUTE, component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/store", component: StorePage },
  { path: "/products/:id", component: ProductPage },
  { path: ERROR_ROUTE, component: NotFoundPage },
];

const matchRoute = (pathname: string): MatchRoute => {
  for (const route of routes) {
    const paramNames: string[] = [];
    const regexPath = route.path.replace(/:([^/]+)/g, (_, key) => {
      paramNames.push(key);
      return "([^/]+)";
    });

    const regex = new RegExp(`^${regexPath}$`);
    const match = pathname.match(regex);

    if (match) {
      const params = paramNames.reduce<Record<string, string>>(
        (acc, key, i) => {
          acc[key] = match[i + 1];
          return acc;
        },
        {}
      );
      return { component: route.component, params };
    }
  }

  return null;
};

export const renderRoute = () => {
  const app = document.querySelector<HTMLDivElement>("#app");

  if (!app) return;

  const current = app.firstElementChild as PageElement | null;

  current?.cleanup?.();

  const hash = window.location.hash;

  if (!hash) {
    window.location.href = `/#${PRINCIPAL_ROUTE}`;
    return;
  }

  const path = hash.replace("#", "");
  const matched = matchRoute(path);

  app.innerHTML = "";

  if (!matched) {
    window.location.href = !REDIRECT_IF_ROUTE_NOT_EXISTS
      ? `/#${ERROR_ROUTE}`
      : `/#${PRINCIPAL_ROUTE}`;
    return;
  }

  const element = matched.component(matched.params);
  app.appendChild(element);
};

export const initRouter = () => {
  window.addEventListener("hashchange", renderRoute);
  renderRoute();
};
