import React from "react";

const sizeClasses = {
  txtInterRegular14Gray100: "font-inter font-normal",
  txtInterRegular16Gray600: "font-inter font-normal",
  txtInterMedium16Gray600: "font-inter font-medium",
  txtInterRegular16Bluegray400: "font-inter font-normal",
  txtInterMedium16Gray800: "font-inter font-medium",
  txtInterSemiBold36: "font-inter font-semibold",
  txtInterSemiBold20Gray600: "font-inter font-semibold",
  txtInterBold28: "font-bold font-inter",
  txtInterMedium16: "font-inter font-medium",
  txtInterRegular14Green500: "font-inter font-normal",
  txtInterRegular14Gray30002: "font-inter font-normal",
  txtInterSemiBold20WhiteA700: "font-inter font-semibold",
  txtInterRegular16Green500: "font-inter font-normal",
  txtInterSemiBold64Bluegray900: "font-inter font-semibold",
  txtInterSemiBold64: "font-inter font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtMontserratRegular813: "font-montserrat font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
