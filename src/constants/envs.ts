import { Envs } from "@src/entities/envs";

const envs: Envs = {
  redirectIfRouteNotExists:
    import.meta.env.VITE_REDIRECT_IF_ROUTE_NOT_EXISTS === "true",
};

export default envs;
