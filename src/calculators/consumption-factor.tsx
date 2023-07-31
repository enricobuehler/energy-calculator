import { useState } from "react";
import CalculatorContainer from "./container";
import FormField from "@/components/FormField";
import Form from "@/components/Form";

export default function ConsumptionFactorCalculator() {
  const [kwp, setKwp] = useState("");

  return (
    <CalculatorContainer>
      <h2>Verbrauchsfaktor</h2>
      <Form>
        <FormField.Container>
          <FormField.Label>PV kWp</FormField.Label>
          <input
            value={kwp}
            onChange={(e) => {
              setKwp(e.target.value);
            }}
          />
        </FormField.Container>
      </Form>

      <p>Ergebnis {(Number(kwp) * 900) / 1000}</p>
    </CalculatorContainer>
  );
}
