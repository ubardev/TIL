"use client";

import { isParentRoute, ROUTE_PATH, routes } from "@/app/routes";

const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  const path = ["", ...item].join("/") as ROUTE_PATH;
  const route = routes[path];
  if (!route || isParentRoute(route)) return null;
  const { children: Component } = route;

  return Component ? <Component /> : null;
};

export default ItemPage;
