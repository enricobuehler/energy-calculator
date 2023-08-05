import { useState } from "react";
import CalculatorContainer from "./container";
import FormField from "@/components/FormField";
import Form from "@/components/Form";
import NumberInput from "@/components/NumberInput";

export default function ConsumptionFactorCalculator() {
  const [kwp, setKwp] = useState(0);

  return (
    <CalculatorContainer>
      <h2>Verbrauchsfaktor</h2>
      <Form>
        <FormField.Container>
          <FormField.Label>PV kWp</FormField.Label>
          <NumberInput onChange={(v) => setKwp(v)} />
        </FormField.Container>
      </Form>

      <p>
        Ergebnis {((Number(kwp) * 900) / 1000).toString().replace(".", ",")}
      </p>
    </CalculatorContainer>
  );
}
