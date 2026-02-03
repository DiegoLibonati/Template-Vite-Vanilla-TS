export interface Route {
  path: string;
  component: (params?: Record<string, string>) => HTMLElement;
}

export type MatchRoute = {
  component: Route["component"];
  params?: Record<string, string>;
} | null;
