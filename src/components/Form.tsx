import { FC, ReactNode } from "react";

const Form: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="flex flex-col gap-2 mt-4 max-w-form">{children}</div>;
};

export default Form;
