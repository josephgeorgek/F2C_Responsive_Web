import React from "react";
import { ErrorMessage } from "../ErrorMessage";

const sizes = { xs: "p-[9px]" };
const shapes = { circle: "rounded-[50%]", round: "rounded-md" } as const;
const variants = {
  gradient: {
    blue_gray_800_02_blue_gray_600_01: "bg-gradient1  text-white-A700",
    blue_gray_700_02_blue_gray_600_01: "bg-gradient2  text-white-A700",
    blue_gray_600_02_blue_300: "bg-gradient ",
  },
  fill: {
    gray_100_04: "bg-gray-100_04 text-gray-400_02",
    gray_100_03: "bg-gray-100_03 text-blue_gray-800",
  },
  outline: {
    blue_gray_600:
      "border border-blue_gray-600 border-solid text-blue_gray-600",
  },
} as const;

export type CheckboxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    inputClassName: string;
    className: string;
    name: string;
    label: string;
    errors: string[];
    id: string;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      errors = [],
      id = "checkbox_id",
      onChange,
      shape = "",
      size = "xs",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(size && sizes[size]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  },
);

export { CheckBox };
