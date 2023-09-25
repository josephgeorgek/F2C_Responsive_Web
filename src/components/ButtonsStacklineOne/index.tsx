import React from "react";

import { Img, Text } from "components";

type ButtonsStacklineOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "labeltext"
> &
  Partial<{ labeltext: string }>;

const ButtonsStacklineOne: React.FC<ButtonsStacklineOneProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-5 m-auto w-full">
          <div className="absolute h-5 inset-[0] m-auto outline outline-[1px] outline-blue_gray-400 rounded-sm w-full"></div>
          <Text
            className="absolute h-full inset-[0] m-auto text-base text-green-500 w-max"
            size="txtInterRegular16Green500"
          >
            {props?.labeltext}
          </Text>
        </div>
        <Img
          className="h-px mt-[-0.28px] mx-auto w-[42px] z-[1]"
          src="defaultNoData.png"
          alt="line_One"
        />
      </div>
    </>
  );
};

ButtonsStacklineOne.defaultProps = { labeltext: "Label" };

export default ButtonsStacklineOne;
