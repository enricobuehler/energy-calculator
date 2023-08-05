import FormField from "@/components/FormField";
import { useMemo, useState } from "react";
import CalculatorContainer from "./container";
import Form from "@/components/Form";
import NumberInput from "@/components/NumberInput";

export default function PeriodConsumptionCalculator() {
  const [kw, setKw] = useState(0);
  const [lastPeriodUsage, setLastPeriodUsage] = useState(0);
  const [lastPeriodDurationDays, setLastPeriodDurationDays] = useState(0);
  const lastPeriodYearlyUsage = useMemo(
    () => Math.round(lastPeriodUsage / lastPeriodDurationDays) * 365,
    [lastPeriodUsage, lastPeriodDurationDays]
  );

  return (
    <CalculatorContainer>
      <h2>Perioden Verbrauch</h2>
      <p>Zieht vom gegebenen Wert 10% ab für die PV</p>
      <Form>
        <div>
          <h3>Optional</h3>
          <FormField.Container>
            <FormField.Label>Verbrauch</FormField.Label>
            <NumberInput onChange={(v) => setLastPeriodUsage(v)} />
          </FormField.Container>
          <FormField.Container>
            <FormField.Label>Über ... Tage</FormField.Label>
            <NumberInput onChange={(v) => setLastPeriodDurationDays(v)} />
          </FormField.Container>
          <p>Verbrauch 1 Jahr {lastPeriodYearlyUsage}</p>
        </div>

        {lastPeriodYearlyUsage > 0 ? (
          <p>
            Perioden Verbrauch {Math.round(Number(lastPeriodYearlyUsage) * 0.9)}
          </p>
        ) : (
          <>
            <FormField.Container>
              <FormField.Label>Ursprungsverbrauch kW</FormField.Label>
              <NumberInput onChange={(v) => setKw(v)} />
            </FormField.Container>
            <p>Perioden Verbrauch {Math.round(Number(kw) * 0.9)}</p>
          </>
        )}
      </Form>
    </CalculatorContainer>
  );
}
