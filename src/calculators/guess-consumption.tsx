import { useState, useMemo } from "react";
import CalculatorContainer from "./container";
import FormField from "@/components/FormField";
import Form from "@/components/Form";
import NumberInput from "@/components/NumberInput";

export default function GuessConsumptionCalculator() {
  const [dailyConsumption, setDailyConsumption] = useState(0);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const dayDifference = useMemo(() => {
    const msDiff = new Date(fromDate).getTime() - new Date(toDate).getTime();

    return Math.abs(msDiff / (1000 * 60 * 60 * 24));
  }, [fromDate, toDate]);

  const guessedConsumption = useMemo(
    () => dayDifference * dailyConsumption,
    [dayDifference, dailyConsumption]
  );

  return (
    <CalculatorContainer>
      <h2>Geschätzter Verbrauch</h2>
      <Form>
        <FormField.Container>
          <FormField.Label>Daily Consumption</FormField.Label>
          <NumberInput onChange={(n) => setDailyConsumption(n)} />
        </FormField.Container>
        <FormField.Container>
          <FormField.Label>From Date</FormField.Label>
          <input
            onChange={(e) => {
              setFromDate(e.target.value);
            }}
            type="date"
            value={fromDate}
          />
        </FormField.Container>
        <FormField.Container>
          <FormField.Label>To Date</FormField.Label>
          <input
            onChange={(e) => {
              setToDate(e.target.value);
            }}
            type="date"
            value={toDate}
          />
        </FormField.Container>
      </Form>

      <p>
        Ergebnis {guessedConsumption} kW über {dayDifference} Tage
      </p>
    </CalculatorContainer>
  );
}
