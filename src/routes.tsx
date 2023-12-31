import { RootRoute, Route, Router } from "@tanstack/react-router";
import Root from "./root";
import {
  consumptionFactorCalculatorRoute,
  guessConsumptionCalculatorRoute,
  periodConsumptionCalculatorRoute,
  photovoltaicPeriodSupplyCalculatorRoute,
  powerSplitCalculatorRoute,
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
  powerSplitCalculatorRoute,
]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
