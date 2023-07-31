import { useState } from "react";

export default function NumberInput({
  onChange,
}: {
  onChange: (v: number) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      type="number"
      onChange={(e) => {
        setValue(e.target.value);

        const number = Number(e.target.value.replace(",", "."));

        onChange(number);
      }}
    />
  );
}
