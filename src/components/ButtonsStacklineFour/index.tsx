import React from "react";

import { Img, Text } from "components";

type ButtonsStacklineFourProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "labeltext"
> &
  Partial<{ labeltext: string }>;

const ButtonsStacklineFour: React.FC<ButtonsStacklineFourProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[17px] m-auto w-full">
          <div className="h-4 m-auto outline outline-[1px] outline-blue_gray-400 rounded-sm w-full"></div>
          <Text
            className="absolute h-full inset-[0] m-auto text-green-500 text-sm w-max"
            size="txtInterRegular14Green500"
          >
            {props?.labeltext}
          </Text>
        </div>
        <Img
          className="h-px mt-[-0.5px] mx-auto w-9 z-[1]"
          src="defaultNoData.png"
          alt="line_Four"
        />
      </div>
    </>
  );
};

ButtonsStacklineFour.defaultProps = { labeltext: "Label" };

export default ButtonsStacklineFour;
