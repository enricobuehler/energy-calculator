import Form from "@/components/Form";
import CalculatorContainer from "./container";
import FormField from "@/components/FormField";
import NumberInput from "@/components/NumberInput";
import { useState } from "react";

export default function PhotovoltaicPeriodSupplyCalculator() {
  const [kwp, setKwp] = useState(0);

  return (
    <CalculatorContainer>
      <h2>PV Perioden Einspeisung</h2>
      <Form>
        <FormField.Container>
          <FormField.Label>PV kWp</FormField.Label>
          <NumberInput onChange={(v) => setKwp(v)} />
        </FormField.Container>
      </Form>

      <p>Perioden Verbrauch {Math.round(Number(kwp) * 900 * 0.9)}</p>
    </CalculatorContainer>
  );
}
