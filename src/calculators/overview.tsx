import { useState } from "react";
import { CalculatorType } from "./common";
import Calculators from ".";

export default function CalculatorsOverview() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>(
    CalculatorType.ConsumptionFactor
  );

  return (
    <div>
      <div className="flex flex-row gap-2">
        {Object.keys(CalculatorType).map((key) => (
          <button
            className="bg-main/20 rounded-md px-2 hover:bg-main/30"
            onClick={() => setActiveCalculator(key as CalculatorType)}
            key={key}
          >
            {key}
          </button>
        ))}
      </div>

      <Calculators activeCalculator={activeCalculator} />
    </div>
  );
}
