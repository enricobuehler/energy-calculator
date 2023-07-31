import ConsumptionFactorCalculator from "./consumption-factor";
import PeriodConsumptionCalculator from "./period-consumption";
import GuessConsumptionCalculator from "./guess-consumption";
import { CalculatorType } from "./common";

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
    default:
      return null;
  }
}
