import { ReactNode } from "react";

export default function CalculatorContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="bg-neutral-accent p-2 rounded-md mt-2">{children}</div>
  );
}
