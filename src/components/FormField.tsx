import { FC, ReactNode } from "react";

export const FormFieldContainer: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <label className="flex flex-col text-main">{children}</label>;
};

export const FormFieldLabel: FC<{ children: ReactNode }> = ({ children }) => {
  return <span className="text-main/75 font-normal mb-1">{children}</span>;
};

export const FormField = {
  Label: FormFieldLabel,
  Container: FormFieldContainer,
};

export default FormField;
