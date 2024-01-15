import { useState } from "react";
import { CalculatorType, CalculatorTypeLocale } from "./common";
import Calculators from ".";
import { cn } from "@/lib/utils";

export default function CalculatorsOverview() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>(
    CalculatorType.ConsumptionFactor
  );

  return (
    <div>
      <div className="flex flex-row gap-2">
        {Object.keys(CalculatorType).map((key) => (
          <button
            className={cn(
              "rounded-md px-4 py-2 transition-colors",
              key === activeCalculator
                ? "bg-main/30 hover:bg-main/40"
                : "bg-main/10 hover:bg-main/20"
            )}
            onClick={() => setActiveCalculator(key as CalculatorType)}
            key={key}
          >
            {CalculatorTypeLocale[key as CalculatorType]}
          </button>
        ))}
      </div>

      <Calculators activeCalculator={activeCalculator} />
    </div>
  );
}
