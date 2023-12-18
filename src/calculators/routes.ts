import { rootRoute } from "@/routes";
import GuessConsumptionCalculator from "./guess-consumption";
import { Route } from "@tanstack/react-router";
import PhotovoltaicPeriodSupplyCalculator from "./photovoltaic-period-supply";
import PeriodConsumptionCalculator from "./period-consumption";
import ConsumptionFactorCalculator from "./consumption-factor";
import PowerSplitCalculator from "./power-split";

export const guessConsumptionCalculatorRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/guess-consumption",
  component: GuessConsumptionCalculator,
});

export const photovoltaicPeriodSupplyCalculatorRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/photovoltaic-period-supply",
  component: PhotovoltaicPeriodSupplyCalculator,
});

export const periodConsumptionCalculatorRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/period-consumption",
  component: PeriodConsumptionCalculator,
});

export const consumptionFactorCalculatorRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/consumption-factor",
  component: ConsumptionFactorCalculator,
});
export const powerSplitCalculatorRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/power-split",
  component: PowerSplitCalculator,
});
