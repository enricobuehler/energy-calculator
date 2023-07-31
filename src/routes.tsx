import { RootRoute, Route, Router } from "@tanstack/router";
import Root from "./root";
import {
  consumptionFactorCalculatorRoute,
  guessConsumptionCalculatorRoute,
  periodConsumptionCalculatorRoute,
  photovoltaicPeriodSupplyCalculatorRoute,
} from "./calculators/routes";
import CalculatorsOverview from "./calculators/overview";

export const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: CalculatorsOverview,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  guessConsumptionCalculatorRoute,
  photovoltaicPeriodSupplyCalculatorRoute,
  periodConsumptionCalculatorRoute,
  consumptionFactorCalculatorRoute,
]);

export const router = new Router({ routeTree });

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
