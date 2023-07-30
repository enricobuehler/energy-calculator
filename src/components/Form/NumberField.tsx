import { useTsController } from "@ts-react/form";

function NumberField() {
  const { field, error } = useTsController<number>();
  return (
    <>
      <input
        value={field.value === undefined ? field.value : 0} // conditional to prevent "uncontrolled to controlled" react warning
        onChange={(e) => {
          field.onChange(e.target.value);
        }}
      />
      {error?.errorMessage && <span>{error?.errorMessage}</span>}
    </>
  );
}
