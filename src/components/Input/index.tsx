import React from "react";
import { ErrorMessage } from "../ErrorMessage";


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
const sizes = { xs: "p-2", sm: "p-[17px]", md: "p-8 sm:px-5" } as const;
export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
               
               
              `}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

export { Input };
