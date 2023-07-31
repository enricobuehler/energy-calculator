import { FC, ReactNode } from "react";

export const FormFieldContainer: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <label className="flex flex-col max-w-sm text-neutral">{children}</label>
  );
};

export const FormFieldLabel: FC<{ children: ReactNode }> = ({ children }) => {
  return <span className="text-main">{children}</span>;
};

export const FormField = {
  Label: FormFieldLabel,
  Container: FormFieldContainer,
};

export default FormField;
