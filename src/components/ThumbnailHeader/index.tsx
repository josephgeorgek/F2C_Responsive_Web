import React from "react";

import { Button, Img, Text } from "components";

type ThumbnailHeaderProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "menutext"
  | "menutext1"
  | "menutext2"
  | "menutext3"
  | "menutext4"
  | "registernowtext"
> &
  Partial<{
    menutext: string;
    menutext1: string;
    menutext2: string;
    menutext3: string;
    menutext4: string;
    registernowtext: string;
  }>;

const ThumbnailHeader: React.FC<ThumbnailHeaderProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[5.57px] items-center justify-start w-auto">
          <Img
            className="h-4 w-6"
            src="images/img_minimize.svg"
            alt="minimize"
          />
          <Img
            className="h-3.5 w-[77px]"
            src="defaultNoData.png"
            alt="nexcent"
          />
        </div>
        <div className="flex sm:flex-col flex-row gap-[22.27px] items-center justify-end w-full">
          <div className="flex flex-row gap-[16.71px] items-start justify-start w-auto">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-gray-800 w-auto"
                size="txtInterMedium16Gray800"
              >
                {props?.menutext4}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-gray-800 w-auto"
                size="txtInterMedium16Gray800"
              >
                {props?.menutext4}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-gray-800 w-auto"
                size="txtInterMedium16Gray800"
              >
                {props?.menutext4}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-gray-800 w-auto"
                size="txtInterMedium16Gray800"
              >
                {props?.menutext4}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-gray-800 w-auto"
                size="txtInterMedium16Gray800"
              >
                {props?.menutext4}
              </Text>
            </div>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[133px] rounded-sm"
            rightIcon={
              <Img
                className="h-[11px] mt-[3px] mb-1 ml-[5px]"
                src="images/img_arrowright.svg"
                alt="arrow_right"
              />
            }
            shape="round"
            color="green_500"
            size="sm"
            variant="fill"
          >
            <div className="font-inter font-medium text-base text-center">
              {props?.registernowtext}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

ThumbnailHeader.defaultProps = {
  menutext: "Pricing",
  menutext1: "Pricing",
  menutext2: "Pricing",
  menutext3: "Pricing",
  menutext4: "Pricing",
  registernowtext: "Register Now",
};

export default ThumbnailHeader;
