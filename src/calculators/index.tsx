import ConsumptionFactorCalculator from "./consumption-factor";
import PeriodConsumptionCalculator from "./period-consumption";
import GuessConsumptionCalculator from "./guess-consumption";
import { CalculatorType } from "./common";
import PhotovoltaicPeriodSupplyCalculator from "./photovoltaic-period-supply";

export default function Calculators({
  activeCalculator,
}: {
  activeCalculator: CalculatorType;
}) {
  switch (activeCalculator) {
    case CalculatorType.ConsumptionFactor:
      return <ConsumptionFactorCalculator />;
    case CalculatorType.PeriodConsumption:
      return <PeriodConsumptionCalculator />;
    case CalculatorType.GuessConsumption:
      return <GuessConsumptionCalculator />;
    case CalculatorType.PhotovoltaicPeriodSupply:
      return <PhotovoltaicPeriodSupplyCalculator />;
    default:
      return null;
  }
}
