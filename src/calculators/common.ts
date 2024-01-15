export enum CalculatorType {
  ConsumptionFactor = "ConsumptionFactor",
  PhotovoltaicPeriodSupply = "PhotovoltaicPeriodSupply",
  PeriodConsumption = "PeriodConsumption",
  GuessConsumption = "GuessConsumption",
  PowerSplit = "PowerSplit",
}

export const CalculatorTypeLocale: Record<CalculatorType, string> = {
  ConsumptionFactor: "Verbrauchsfaktor",
  PhotovoltaicPeriodSupply: "PV Perioden Einspeisung",
  PeriodConsumption: "Perioden Verbrauch",
  GuessConsumption: "Geschätzter Verbrauch",
  PowerSplit: "Leistungsaufteilung",
};
