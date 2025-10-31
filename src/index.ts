import { initRouter } from "@src/router/appRouter";

const onInit = () => {
  initRouter();
};

document.addEventListener("DOMContentLoaded", onInit);
