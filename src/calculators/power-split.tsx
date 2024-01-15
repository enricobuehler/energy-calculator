import { useState, useMemo, useCallback } from "react";
import CalculatorContainer from "./container";
import FormField from "@/components/FormField";
import NumberInput from "@/components/NumberInput";
import Form from "@/components/Form";
import { Button } from "@/components/Button";

type Unit = {
  kwp: number;
};

function roundToSevenDigits(num: number) {
  return Math.round((num + Number.EPSILON) * 10000000) / 10000000;
}

export default function PowerSplitCalculator() {
  const [units, setUnits] = useState<Array<Unit>>([{ kwp: 0 }, { kwp: 0 }]);

  const unitKwpSum = useMemo(
    () => units.reduce((prev, curr) => prev + curr.kwp, 0),
    [units]
  );

  const powerSplit = useMemo(
    () => units.map((u) => roundToSevenDigits(u.kwp / unitKwpSum)),
    [units, unitKwpSum]
  );

  const updateUnitKwp = useCallback(
    (index: number, kwp: number) => {
      const nextUnits = [...units];

      nextUnits[index].kwp = kwp;

      setUnits(nextUnits);
    },
    [units, setUnits]
  );

  const addUnit = useCallback(
    () => setUnits((v) => [...v, { kwp: 0 }]),
    [setUnits]
  );

  const removeUnit = useCallback(
    () =>
      setUnits((v) => {
        const next = [...v];
        next.pop();
        return next;
      }),
    [setUnits]
  );

  return (
    <CalculatorContainer>
      <h2>Leistungsaufteilung</h2>
      <p>
        Hier können die Faktoren der Leistungsaufteilung einer KAA Anlage
        berechnet werden
      </p>
      <Form>
        {units.map((_, index) => (
          <FormField.Container key={index}>
            <FormField.Label>PV Anlage {index + 1} - kWp</FormField.Label>
            <NumberInput onChange={(v) => updateUnitKwp(index, v)} />
          </FormField.Container>
        ))}
      </Form>
      <div className="mt-4 mb-2 gap-2 flex flex-row">
        <Button onClick={() => addUnit()}>Weitere PV hinzufügen</Button>
        {units.length > 2 && (
          <Button onClick={() => removeUnit()}>PV entfernen</Button>
        )}
      </div>

      <p>
        Ergebnis Leistungsaufteilung: <br />
        {powerSplit.map((split, index) => (
          <>
            Anlage {index + 1}: {split.toLocaleString()} <br />
          </>
        ))}
      </p>
    </CalculatorContainer>
  );
}
