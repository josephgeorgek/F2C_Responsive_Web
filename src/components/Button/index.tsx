import React from "react";

const shapes = { circle: "rounded-[50%]", round: "rounded-md" } as const;
const variants = {
  fill: {
    white_A700_63: "bg-white-A700_63",
    white_A700: "bg-white-A700 text-green-500",
    green_500: "bg-green-500 text-white-A700",
    gray_100: "bg-gray-100 text-green-500",
    green_50: "bg-green-50 text-green-500",
    green_700: "bg-green-700 text-white-A700",
  },
} as const;
const sizes = {
  xs: "p-1",
  sm: "p-2",
  md: "p-[11px]",
  lg: "p-4",
  xl: "p-5",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
