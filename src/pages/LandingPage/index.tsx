import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  List,
  PagerIndicator,
  Text,
} from "components";
import LandingPageFooterbig4 from "components/LandingPageFooterbig4";

const LandingPagePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <header className="bg-gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[164px] md:mt-0 my-[30px] w-auto">
            <Img
              className="h-6 w-[35px]"
              src="images/img_minimize.svg"
              alt="minimize"
            />
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[201px] md:mt-0 my-[30px] w-[45%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[50px] items-center justify-center w-auto md:w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtInterMedium16"
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtInterRegular16"
                >
                  Service
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtInterRegular16"
                >
                  Feature
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtInterRegular16"
                >
                  Employees
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtInterRegular16"
                >
                  Departments
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtInterRegular16"
                >
                  Chat?
                </Text>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-3.5 items-start justify-start md:ml-[0] ml-[100px] mr-[120px] md:mt-0 my-[22px] w-auto">
            <Button
              className="cursor-pointer font-medium min-w-[77px] text-center text-sm"
              shape="round"
              color="gray_100"
              size="md"
              variant="fill"
            >
              Login
            </Button>
            <Button
              className="cursor-pointer font-medium min-w-[91px] text-center text-sm"
              shape="round"
              color="green_500"
              size="md"
              variant="fill"
            >
              Sign up
            </Button>
          </div>
        </header>
        <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
          <div className="bg-gray-100 flex flex-col items-center justify-start md:px-10 px-36 sm:px-5 py-24 w-full">
            <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-6xl mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="leading-[76.00px] max-w-[657px] md:max-w-full md:text-5xl text-[64px] text-gray-800"
                      size="txtInterSemiBold64"
                    >
                      <span className="text-gray-800 font-inter text-left font-semibold">
                        Data insights{" "}
                      </span>
                      <span className="text-green-500 font-inter text-left font-semibold">
                        from 30 years
                      </span>
                    </Text>
                    <Text
                      className="text-base text-gray-600 w-full"
                      size="txtInterRegular16Gray600"
                    >
                      Harness the full potential of your data with our
                      cutting-edge portal.
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[128px] rounded text-base text-center"
                    shape="round"
                    color="green_500"
                    size="lg"
                    variant="fill"
                  >
                    Register
                  </Button>
                </div>
                <Img
                  className="h-[407px] w-[391px]"
                  src="images/img_illustration.svg"
                  alt="illustration"
                />
              </div>
              <PagerIndicator
                className="flex gap-2 h-2.5 items-start justify-start w-[46px]"
                count={3}
                activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-green-500 w-2.5"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-green-500_75 w-2.5"
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-start max-w-[1440px] md:px-10 px-36 sm:px-5 w-full">
            <div className="flex flex-col gap-2 items-center justify-start max-w-[1110px] mx-auto w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800 w-full"
                size="txtInterSemiBold36"
              >
                Our Journey
              </Text>
              <Text
                className="text-base text-center text-gray-600 w-full"
                size="txtInterRegular16Gray600"
              >
                We have been working with some 50+ BUs
              </Text>
            </div>
            <Img
              className="h-[98px] max-w-6xl mx-auto w-full"
              src="images/img_clientslogos.svg"
              alt="clientslogos"
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-2 items-center justify-start max-w-[1440px] w-full">
              <Text
                className="leading-[44.00px] max-w-[542px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800"
                size="txtInterSemiBold36"
              >
                Manage your entire ORG BUs in a single system
              </Text>
              <Text
                className="text-base text-center text-gray-600 w-full"
                size="txtInterRegular16Gray600"
              >
                <>Who is Data Dashboard suitable for?</>
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-[26px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-between max-w-[1440px] md:px-10 px-36 sm:px-5 w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-col gap-2 items-center justify-start md:px-5 px-8 py-6 rounded-lg shadow-bs1 w-[299px]">
                <div className="flex flex-col gap-4 items-center justify-start w-[267px]">
                  <Img
                    className="h-14 w-[65px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-800 w-full"
                    size="txtInterBold28"
                  >
                    BU Organisations
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="leading-[20.00px] max-w-[251px] md:max-w-full text-center text-gray-600 text-sm"
                    size="txtInterRegular14"
                  >
                    Our membership management software provides full automation
                    of membership renewals and payments
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-2 items-center justify-start md:px-5 px-8 py-6 rounded-lg shadow-bs1 w-[299px]">
                <div className="flex flex-col gap-4 items-center justify-start w-[267px]">
                  <Img
                    className="h-14 w-[65px]"
                    src="images/img_calculator.svg"
                    alt="calculator"
                  />
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-800 w-full"
                    size="txtInterBold28"
                  >
                    CX Associations
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="leading-[20.00px] max-w-[240px] md:max-w-full text-center text-gray-600 text-sm"
                    size="txtInterRegular14"
                  >
                    Our membership management software provides full automation
                    of membership renewals and payments
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-2 items-center justify-start md:px-5 px-8 py-6 rounded-lg shadow-bs1 w-[299px]">
                <div className="flex flex-col gap-4 items-center justify-start w-[267px]">
                  <Img
                    className="h-14 w-[65px]"
                    src="images/img_computer.svg"
                    alt="computer"
                  />
                  <Text
                    className="leading-[36.00px] max-w-[231px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-800"
                    size="txtInterBold28"
                  >
                    Partner Enagements
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="leading-[20.00px] max-w-[251px] md:max-w-full text-center text-gray-600 text-sm"
                    size="txtInterRegular14"
                  >
                    Our membership management software provides full automation
                    of membership renewals and payments
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col gap-12 items-start justify-center mt-[62px] w-auto md:w-full">
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1439px] md:px-10 px-36 sm:px-5 w-full">
              <Img
                className="h-[433px] w-[442px]"
                src="images/img_frame35.svg"
                alt="frameThirtyFive"
              />
              <div className="flex flex-1 flex-col gap-8 items-start justify-start max-w-[661px] w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-[601px] md:w-full">
                  <Text
                    className="leading-[44.00px] max-w-[601px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                    size="txtInterSemiBold36"
                  >
                    The unseen of spending three years at Pixelgrade
                  </Text>
                  <Text
                    className="leading-[20.00px] max-w-[601px] md:max-w-full text-gray-600 text-sm"
                    size="txtInterRegular14"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit amet justo ipsum. Sed accumsan quam vitae est varius
                    fringilla. Pellentesque placerat vestibulum lorem sed porta.
                    Nullam mattis tristique iaculis. Nullam pulvinar sit amet
                    risus pretium auctor. Etiam quis massa pulvinar, aliquam
                    quam vitae, tempus sem. Donec elementum pulvinar odio.
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[151px] rounded text-base text-center"
                  shape="round"
                  color="green_500"
                  size="lg"
                  variant="fill"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex md:flex-col flex-row gap-[30px] items-center justify-between max-w-[1439px] md:px-10 px-36 sm:px-5 py-16 w-full">
            <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-[540px] sm:w-full">
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[44.00px] max-w-[408px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                  size="txtInterSemiBold36"
                >
                  <span className="text-gray-800 font-inter text-left font-semibold">
                    Helping a Self Service{" "}
                  </span>
                  <span className="text-green-500 font-inter text-left font-semibold">
                    business reinvent itself
                  </span>
                </Text>
              </div>
              <Text
                className="text-base text-gray-900 w-full"
                size="txtInterRegular16"
              >
                We reached here with our hard work and dedication
              </Text>
            </div>
            <div className="flex sm:flex-1 flex-col items-center justify-start w-auto sm:w-full">
              <div className="sm:gap-5 gap-[30px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
                  <Img
                    className="h-12 w-12"
                    src="images/img_icon_green_500.svg"
                    alt="icon"
                  />
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 w-auto"
                      size="txtInterBold28"
                    >
                      2,245,341
                    </Text>
                    <Text
                      className="text-base text-gray-600 w-auto"
                      size="txtInterRegular16Gray600"
                    >
                      Members
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
                  <Img
                    className="h-12 w-12"
                    src="images/img_map.svg"
                    alt="map"
                  />
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 w-auto"
                      size="txtInterBold28"
                    >
                      46
                    </Text>
                    <Text
                      className="text-base text-gray-600"
                      size="txtInterRegular16Gray600"
                    >
                      BU
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
                  <Img
                    className="h-12 w-12"
                    src="images/img_icon_green_500_48x48.svg"
                    alt="icon"
                  />
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 w-auto"
                      size="txtInterBold28"
                    >
                      82
                    </Text>
                    <Text
                      className="text-base text-gray-600 w-auto"
                      size="txtInterRegular16Gray600"
                    >
                      Transaction Types{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
                  <Img
                    className="h-12 w-12"
                    src="images/img_icon_48x48.svg"
                    alt="icon"
                  />
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 w-auto"
                      size="txtInterBold28"
                    >
                      1,926,436
                    </Text>
                    <Text
                      className="text-base text-gray-600 w-auto"
                      size="txtInterRegular16Gray600"
                    >
                      Transactions
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-montserrat items-start justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1439px] md:px-10 px-36 sm:px-5 w-full">
              <div className="md:h-[330px] h-[428px] relative w-[28%] md:w-full">
                <div className="md:h-[330px] h-[428px] m-auto w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col md:gap-10 gap-[89px] items-end justify-start w-full">
                      <Img
                        className="h-[102px]"
                        src="images/img_padlock.svg"
                        alt="padlock"
                      />
                      <Img
                        className="h-[147px]"
                        src="images/img_plant.svg"
                        alt="plant"
                      />
                      <Img
                        className="h-px"
                        src="images/img_floor.svg"
                        alt="floor"
                      />
                    </div>
                  </div>
                  <div className="absolute flex flex-row items-start justify-between left-[1%] top-[11%] w-4/5">
                    <Img
                      className="h-[60px] mt-[88px]"
                      src="images/img_minimize_green_500.svg"
                      alt="minimize_One"
                    />
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[304px] items-center justify-start p-1.5"
                      style={{
                        backgroundImage: "url('images/img_device.svg')",
                      }}
                    >
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[284px] items-end justify-start my-0.5 p-[11px] w-[99%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group20.svg')",
                        }}
                      >
                        <div className="flex flex-col items-center justify-start mb-[22px] mt-[19px] w-[95%] md:w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-3.5 items-center justify-start w-[13px] md:w-full"
                            style={{
                              backgroundImage: "url('images/img_group25.svg')",
                            }}
                          >
                            <Img
                              className="h-3.5 w-[13px]"
                              src="images/img_user_black_900.svg"
                              alt="user"
                            />
                          </div>
                          <div className="bg-white-A700_6c h-1.5 mt-[3px] w-[45%]"></div>
                          <div className="flex flex-col items-start justify-start mt-[19px] w-full">
                            <div className="bg-black-900_63 h-[5px] w-1/4"></div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[18px] items-start justify-start mt-1.5 p-[5px] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group23.svg')",
                              }}
                            >
                              <div className="bg-white-A700_6c h-1 ml-0.5 md:ml-[0] w-1/2"></div>
                            </div>
                            <div className="bg-black-900_63 h-[5px] mt-3.5 w-1/4"></div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[18px] items-start justify-end mt-1.5 p-1.5 w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group24.svg')",
                              }}
                            >
                              <div className="bg-white-A700_6c h-1 w-[52%]"></div>
                            </div>
                            <div className="bg-black-900_63 h-[5px] mt-4 w-1/4"></div>
                            <div
                              className="bg-cover bg-no-repeat flex md:h-2.5 h-[18px] justify-end mt-1.5 p-1.5 relative w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group22.svg')",
                              }}
                            >
                              <Img
                                className="absolute bottom-[33%] h-1 left-[33%] w-1"
                                src="images/img_vector_green_500_4x4.svg"
                                alt="vector_Six"
                              />
                              <div className="absolute bottom-[33%] flex flex-row items-start justify-center left-[13%] w-[29%]">
                                <Img
                                  className="h-1 w-1"
                                  src="images/img_vector_4x4.svg"
                                  alt="vector_Seven"
                                />
                                <Img
                                  className="h-1 ml-0.5 w-1"
                                  src="images/img_vector_green_500_4x4.svg"
                                  alt="vector_Eight"
                                />
                                <Img
                                  className="h-1 ml-0.5 w-1"
                                  src="images/img_vector_green_500_4x4.svg"
                                  alt="vector_Nine"
                                />
                                <Img
                                  className="h-1 ml-0.5 w-1"
                                  src="images/img_vector_green_500_4x4.svg"
                                  alt="vector_Ten"
                                />
                                <Img
                                  className="h-1 ml-0.5 w-1"
                                  src="images/img_vector_green_500_4x4.svg"
                                  alt="vector_Eleven"
                                />
                              </div>
                              <Img
                                className="absolute bottom-[33%] h-1 left-[44%] w-1"
                                src="images/img_vector_4x4.svg"
                                alt="vector_Twelve"
                              />
                              <div className="flex flex-row h-full items-center justify-center ml-auto mr-[35px] mt-auto w-[10%]">
                                <Img
                                  className="h-1 w-1"
                                  src="images/img_vector_green_500_4x4.svg"
                                  alt="vector_Thirteen"
                                />
                                <Img
                                  className="h-1 ml-0.5 w-1"
                                  src="images/img_vector_green_500_4x4.svg"
                                  alt="vector_Fourteen"
                                />
                              </div>
                              <Img
                                className="absolute bottom-[33%] h-1 left-[33%]"
                                src="images/img_group.svg"
                                alt="group"
                              />
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-start ml-2.5 md:ml-[0] mt-[31px] p-1.5"
                              style={{
                                backgroundImage:
                                  "url('images/img_group21.svg')",
                              }}
                            >
                              <Text
                                className="mb-0.5 text-[8.13px] text-gray-300_01"
                                size="txtMontserratRegular813"
                              >
                                SING UP
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[287px] left-[9%]"
                  src="images/img_character_deep_orange_200.svg"
                  alt="character"
                />
              </div>
              <div className="flex flex-1 flex-col font-inter gap-8 items-start justify-start max-w-[661px] w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-[601px] md:w-full">
                  <Text
                    className="leading-[44.00px] max-w-[601px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                    size="txtInterSemiBold36"
                  >
                    How to design your Data Site like we did
                  </Text>
                  <Text
                    className="leading-[20.00px] max-w-[601px] md:max-w-full text-gray-600 text-sm"
                    size="txtInterRegular14"
                  >
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam
                    tempor, augue nec tincidunt molestie, massa nunc varius
                    arcu, at scelerisque elit erat a magna. Donec quis erat at
                    libero ultrices mollis. In hac habitasse platea dictumst.
                    Vivamus vehicula leo dui, at porta nisi facilisis finibus.
                    In euismod augue vitae nisi ultricies, non aliquet urna
                    tincidunt. Integer in nisi eget nulla commodo faucibus
                    efficitur quis massa. Praesent felis est, finibus et nisi
                    ac, hendrerit venenatis libero. Donec consectetur faucibus
                    ipsum id gravida.
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[151px] rounded text-base text-center"
                  shape="round"
                  color="green_500"
                  size="lg"
                  variant="fill"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex md:flex-col flex-row font-inter md:gap-10 gap-[78px] items-center justify-start max-w-[1439px] md:px-10 px-36 sm:px-5 py-8 w-full">
            <Img
              className="h-[326px] md:h-auto object-cover rounded-lg w-[326px]"
              src="images/img_image9.png"
              alt="imageNine"
            />
            <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="leading-[24.00px] max-w-[748px] md:max-w-full text-base text-gray-600"
                  size="txtInterMedium16Gray600"
                >
                  Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                  lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
                  Proin eu enim metus. Vivamus sed libero ornare, tristique quam
                  in, gravida enim. Nullam ut molestie arcu, at hendrerit elit.
                  Morbi laoreet elit at ligula molestie, nec molestie mi
                  blandit. Suspendisse cursus tellus sed augue ultrices, quis
                  tristique nulla sodales. Suspendisse eget lorem eu turpis
                  vestibulum pretium. Suspendisse potenti. Quisque malesuada
                  enim sapien, vitae placerat ante feugiat eget. Quisque
                  vulputate odio neque, eget efficitur libero condimentum id.
                  Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </Text>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-green-500 text-xl w-full"
                    size="txtInterSemiBold20"
                  >
                    Joseph George
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400 w-full"
                    size="txtInterRegular16Bluegray400"
                  >
                    OC Data Racing Association
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-8 items-center justify-start w-full">
                <Img
                  className="h-12 max-h-12 sm:w-[] md:w-[]"
                  src="images/img_frame10.svg"
                  alt="frameTen"
                />
                <div className="flex flex-1 flex-row gap-2 items-center justify-start p-2 w-full">
                  <Text
                    className="text-green-500 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Meet all customers
                  </Text>
                  <Img
                    className="h-6 w-[19px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter gap-4 items-center justify-start w-auto md:w-full">
            <div className="flex flex-col gap-2 items-center justify-start max-w-[1110px] mx-auto md:px-5 w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800 w-full"
                size="txtInterSemiBold36"
              >
                Caring is the new marketing
              </Text>
              <Text
                className="leading-[24.00px] max-w-[628px] md:max-w-full text-base text-center text-gray-600"
                size="txtInterRegular16Gray600"
              >
                <>
                  The Data blog is the best place to read about the latest
                  membership insights, trends and more. See who&#39;s joining
                  the community, read about how our community are increasing
                  their membership income and lot&#39;s more.​
                </>
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-between max-w-[1439px] md:px-10 px-36 sm:px-5 w-full"
              orientation="horizontal"
            >
              <div className="md:h-[286px] h-[366px] relative w-[368px]">
                <Img
                  className="absolute h-[286px] inset-x-[0] mx-auto object-cover rounded-lg top-[0] w-[368px] md:w-full"
                  src="images/img_image18.png"
                  alt="imageEighteen"
                />
                <div className="absolute bg-gray-100 bottom-[0] flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto p-4 rounded-lg shadow-bs2 w-auto">
                  <Text
                    className="leading-[28.00px] max-w-[285px] md:max-w-full text-center text-gray-600 text-xl"
                    size="txtInterSemiBold20Gray600"
                  >
                    Creating Streamlined Safeguarding Processes with OneRen
                  </Text>
                  <CheckBox
                    className="font-semibold text-green-500 text-left text-xl"
                    inputClassName="mr-[5px]"
                    name="readmore"
                    id="readmore"
                    label="Readmore"
                  ></CheckBox>
                </div>
              </div>
              <div className="md:h-[286px] h-[366px] relative w-[368px]">
                <Img
                  className="absolute h-[286px] inset-x-[0] mx-auto object-cover rounded-lg top-[0] w-[368px] md:w-full"
                  src="images/img_image19.png"
                  alt="imageNineteen"
                />
                <div className="absolute bg-gray-100 bottom-[0] flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto p-4 rounded-lg shadow-bs2 w-auto">
                  <Text
                    className="leading-[28.00px] max-w-[285px] md:max-w-full text-center text-gray-600 text-xl"
                    size="txtInterSemiBold20Gray600"
                  >
                    What are your safeguarding responsibilities and how can you
                    manage them?
                  </Text>
                  <CheckBox
                    className="font-semibold text-green-500 text-left text-xl"
                    inputClassName="mr-[5px]"
                    name="readmore"
                    id="readmore2"
                    label="Readmore"
                  ></CheckBox>
                </div>
              </div>
              <div className="md:h-[286px] h-[366px] relative w-[368px]">
                <Img
                  className="absolute h-[286px] inset-x-[0] mx-auto object-cover rounded-lg top-[0] w-[368px] md:w-full"
                  src="images/img_image20.png"
                  alt="imageTwenty"
                />
                <div className="absolute bg-gray-100 bottom-[0] flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto p-4 rounded-lg shadow-bs2 w-auto">
                  <Text
                    className="leading-[28.00px] max-w-[285px] md:max-w-full text-center text-gray-600 text-xl"
                    size="txtInterSemiBold20Gray600"
                  >
                    Revamping the Membership Model with Triathlon Australia
                  </Text>
                  <CheckBox
                    className="font-semibold text-green-500 text-left text-xl"
                    inputClassName="mr-[5px]"
                    name="readmore"
                    id="readmore3"
                    label="Readmore"
                  ></CheckBox>
                </div>
              </div>
            </List>
          </div>
        </div>
        <footer className="flex items-center justify-center mt-[94px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="bg-gray-100 flex flex-col gap-8 items-center justify-start max-w-[1440px] py-8 w-full">
              <Text
                className="leading-[76.00px] max-w-[887px] md:max-w-full md:text-5xl text-[64px] text-blue_gray-900 text-center"
                size="txtInterSemiBold64Bluegray900"
              >
                Pellentesque suscipit fringilla libero eu.
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[178px] rounded"
                rightIcon={
                  <Img
                    className="h-4 mt-px mb-0.5 ml-2"
                    src="images/img_arrowright.svg"
                    alt="arrow_right"
                  />
                }
                shape="round"
                color="green_500"
                size="lg"
                variant="fill"
              >
                <div className="font-medium text-base text-center">
                  Get a Demo
                </div>
              </Button>
            </div>
            <LandingPageFooterbig4
              className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-10 gap-[125px] items-start justify-start md:px-10 sm:px-5 px-[165px] py-16 w-auto md:w-full"
              copyright2020="Copyright © 2020 JG INC ltd."
              cameraicon="images/img_camera.svg"
              globeicon="images/img_globe.svg"
              twittericon="images/img_twitter.svg"
              pathicon="images/img_path.svg"
              company="ORG"
              pricingtext="CSR"
            />
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPagePage;
