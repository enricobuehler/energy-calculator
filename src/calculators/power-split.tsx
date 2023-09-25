import { useState, useMemo } from "react";
import CalculatorContainer from "./container";
import FormField from "@/components/FormField";
import NumberInput from "@/components/NumberInput";
import Form from "@/components/Form";

export default function PowerSplitCalculator() {
  const [unitOneKwp, setUnitOneKwp] = useState(0);
  const [unitTwoKwp, setUnitTwoKwp] = useState(0);
  const unitKwpSum = useMemo(
    () => unitOneKwp + unitTwoKwp,
    [unitOneKwp, unitTwoKwp]
  );
  const powerSplit = useMemo(
    () => [
      Math.round(unitOneKwp / unitKwpSum),
      Math.round(unitTwoKwp / unitKwpSum),
    ],
    [unitOneKwp, unitTwoKwp, unitKwpSum]
  );

  return (
    <CalculatorContainer>
      <h2>Leistungsaufteilung</h2>
      <p>
        Hier können die Faktoren der Leistungsaufteilung einer KAA Anlage
        berechnet werden
      </p>
      <Form>
        <FormField.Container>
          <FormField.Label>PV Anlage 1 kWp</FormField.Label>
          <NumberInput onChange={(v) => setUnitOneKwp(v)} />
        </FormField.Container>
        <FormField.Container>
          <FormField.Label>PV Anlage 2 kWp</FormField.Label>
          <NumberInput onChange={(v) => setUnitTwoKwp(v)} />
        </FormField.Container>
      </Form>
      <p>
        Leistungsaufteilung: <br />
        Anlage 1:{powerSplit[0]} <br />
        Anlage 2: {powerSplit[1]}
      </p>
    </CalculatorContainer>
  );
}
