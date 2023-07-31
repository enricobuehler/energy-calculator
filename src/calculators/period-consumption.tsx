import FormField from "@/components/FormField";
import { useState } from "react";
import CalculatorContainer from "./container";
import Form from "@/components/Form";
import NumberInput from "@/components/NumberInput";

export default function PeriodConsumptionCalculator() {
  const [kw, setKw] = useState(0);

  return (
    <CalculatorContainer>
      <h2>Perioden Verbrauch</h2>
      <p>Zieht vom gegebenen Wert 10% ab für die PV</p>
      <Form>
        <FormField.Container>
          <FormField.Label>Ursprungsverbrauch kW</FormField.Label>
          <NumberInput onChange={(v) => setKw(v)} />
        </FormField.Container>
      </Form>

      <p>Perioden Verbrauch {Math.round(Number(kw) * 0.9)}</p>
    </CalculatorContainer>
  );
}
