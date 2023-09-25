import React from "react";

import { Button, Img, List, Text } from "components";

type LandingPageFooterbig4Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "signal"
  | "copyright2020"
  | "allrightsreservOne"
  | "cameraicon"
  | "globeicon"
  | "twittericon"
  | "pathicon"
  | "company"
  | "aboutustext"
  | "blogtext"
  | "contactustext"
  | "pricingtext"
  | "testimonialstext"
  | "support"
  | "helpcentertext"
  | "termsofservicetext"
  | "legaltext"
  | "privacypolicytext"
  | "statustext"
  | "stayuptodate"
  | "inputfieldbg"
  | "emailinput"
  | "essentialicons"
> &
  Partial<{
    signal: string;
    copyright2020: string;
    allrightsreservOne: string;
    cameraicon: string;
    globeicon: string;
    twittericon: string;
    pathicon: string;
    company: string;
    aboutustext: string;
    blogtext: string;
    contactustext: string;
    pricingtext: string;
    testimonialstext: string;
    support: string;
    helpcentertext: string;
    termsofservicetext: string;
    legaltext: string;
    privacypolicytext: string;
    statustext: string;
    stayuptodate: string;
    inputfieldbg: string;
    emailinput: string;
    essentialicons: string;
  }>;

const LandingPageFooterbig4: React.FC<LandingPageFooterbig4Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[27.84px] items-start justify-start w-auto">
          <div className="flex flex-row gap-[6.88px] items-center justify-start w-auto">
            <Img
              className="h-5 w-[30px]"
              src="images/img_minimize_white_a700.svg"
              alt="minimize_Two"
            />
            {!!props?.signal ? (
              <Img
                className="h-[17px] w-[95px]"
                alt="signal"
                src="props?.signal"
              />
            ) : null}
          </div>
          <div className="flex flex-col gap-[5.57px] items-center justify-start">
            <Text
              className="text-gray-100 text-sm w-auto"
              size="txtInterRegular14Gray100"
            >
              {props?.copyright2020}
            </Text>
            <Text
              className="text-gray-100 text-sm w-auto"
              size="txtInterRegular14Gray100"
            >
              {props?.allrightsreservOne}
            </Text>
          </div>
          <div className="flex flex-row gap-[11.14px] items-start justify-start">
            {!!props?.cameraicon ? (
              <Button
                className="flex h-[22px] items-center justify-center w-[22px]"
                shape="circle"
                color="white_A700_63"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-[11px]"
                  alt="camera"
                  src="props?.cameraicon"
                />
              </Button>
            ) : null}
            {!!props?.globeicon ? (
              <Button
                className="flex h-[22px] items-center justify-center w-[22px]"
                shape="circle"
                color="white_A700_63"
                size="xs"
                variant="fill"
              >
                <Img className="h-[11px]" alt="globe" src="props?.globeicon" />
              </Button>
            ) : null}
            {!!props?.twittericon ? (
              <Button
                className="flex h-[22px] items-center justify-center w-[22px]"
                shape="circle"
                color="white_A700_63"
                size="xs"
                variant="fill"
              >
                <Img alt="twitter" src="props?.twittericon" />
              </Button>
            ) : null}
            {!!props?.pathicon ? (
              <Button
                className="flex h-[22px] items-center justify-center w-[22px]"
                shape="circle"
                color="white_A700_63"
                size="xs"
                variant="fill"
              >
                <Img alt="path" src="props?.pathicon" />
              </Button>
            ) : null}
          </div>
        </div>
        <div className="flex sm:flex-col flex-row gap-[20.88px] items-start justify-start w-auto sm:w-full">
          <List
            className="sm:flex-col flex-row gap-5 grid grid-cols-2 w-[55%] sm:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-[16.71px] items-start justify-start w-auto">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtInterSemiBold20WhiteA700"
              >
                {props?.company}
              </Text>
              <div className="flex flex-col gap-[8.35px] items-start justify-start w-auto">
                <Text
                  className="text-gray-100 text-sm w-auto"
                  size="txtInterRegular14Gray100"
                >
                  {props?.aboutustext}
                </Text>
                <Text
                  className="text-gray-100 text-sm w-auto"
                  size="txtInterRegular14Gray100"
                >
                  {props?.blogtext}
                </Text>
                <Text
                  className="text-gray-100 text-sm w-auto"
                  size="txtInterRegular14Gray100"
                >
                  {props?.contactustext}
                </Text>
                <Text
                  className="text-gray-100 text-sm w-auto"
                  size="txtInterRegular14Gray100"
                >
                  {props?.pricingtext}
                </Text>
                <Text
                  className="text-gray-100 text-sm w-auto"
                  size="txtInterRegular14Gray100"
                >
                  {props?.testimonialstext}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[16.71px] items-start justify-start w-auto">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtInterSemiBold20WhiteA700"
              >
                {props?.support}
              </Text>
              <div className="flex flex-col gap-[8.35px] items-start justify-start w-auto">
                <Text
                  className="text-gray-100 text-sm w-auto"
                  size="txtInterRegular14Gray100"
                >
                  {props?.helpcentertext}
                </Text>
                <Text
                  className="text-gray-100 text-sm w-auto"
                  size="txtInterRegular14Gray100"
                >
                  {props?.termsofservicetext}
                </Text>
                <Text
                  className="text-gray-100 text-sm w-auto"
                  size="txtInterRegular14Gray100"
                >
                  {props?.legaltext}
                </Text>
                <Text
                  className="text-gray-100 text-sm w-auto"
                  size="txtInterRegular14Gray100"
                >
                  {props?.privacypolicytext}
                </Text>
                <Text
                  className="text-gray-100 text-sm w-auto"
                  size="txtInterRegular14Gray100"
                >
                  {props?.statustext}
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-col gap-[16.71px] items-start justify-start w-auto">
            <Text
              className="text-white-A700 text-xl"
              size="txtInterSemiBold20WhiteA700"
            >
              {props?.stayuptodate}
            </Text>
            <div className="h-[27px] relative w-full">
              {!!props?.inputfieldbg ? (
                <div className="bg-white-A700_6c h-[27px] m-auto rounded-[5px] w-full"></div>
              ) : null}
              <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[22%] w-[91%]">
                {!!props?.emailinput ? (
                  <Text
                    className="text-gray-300_02 text-sm"
                    size="txtInterRegular14Gray30002"
                  >
                    {props?.emailinput}
                  </Text>
                ) : null}
                {!!props?.essentialicons ? (
                  <Img
                    className="h-3 w-3"
                    alt="essentialicons"
                    src="props?.essentialicons"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageFooterbig4.defaultProps = {
  copyright2020: "Copyright © 2020 Landify UI Kit.",
  allrightsreservOne: "All rights reserved",
  company: "Company",
  aboutustext: "About us",
  blogtext: "Blog",
  contactustext: "Contact us",
  pricingtext: "Pricing",
  testimonialstext: "Testimonials",
  support: "Support",
  helpcentertext: "Help center",
  termsofservicetext: "Terms of service",
  legaltext: "Legal",
  privacypolicytext: "Privacy policy",
  statustext: "Status",
  stayuptodate: "Stay up to date",
};

export default LandingPageFooterbig4;
