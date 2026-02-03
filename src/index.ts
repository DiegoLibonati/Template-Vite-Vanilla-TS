import "@/index.css";
import { initRouter } from "@/router/appRouter";

const onInit = (): void => {
  initRouter();
};

document.addEventListener("DOMContentLoaded", onInit);
