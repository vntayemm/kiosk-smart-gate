import React from "react";

import { Column, Row, Img, Text, Button } from "components";

const XcnhnEIOPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center mx-[auto] lg:pb-[60px] xl:pb-[68px] 2xl:pb-[77px] 3xl:pb-[92px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700_ab items-center justify-between lg:p-[13px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] w-[100%]">
            <Img
              src="images/img_slogan.png"
              className="3xl:h-[115px] lg:h-[75px] xl:h-[86px] 2xl:h-[96px] lg:ml-[21px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[33px] w-[27%]"
              alt="slogan"
            />
            <Row className="bg-indigo_500 items-center justify-center lg:mr-[13px] xl:mr-[15px] 2xl:mr-[16px] 3xl:mr-[20px] lg:p-[13px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius10 w-[20%]">
              <Img
                src="images/img_vector.svg"
                className="lg:h-[27px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] mb-[2px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:w-[26px] xl:w-[30px] 2xl:w-[33px] 3xl:w-[40px]"
                alt="Vector"
              />
              <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mr-[24px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[37px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[auto]">
                1800599917
              </Text>
            </Row>
          </Row>
        </header>
        <Column className="bg-white_A700_ab items-center 2xl:mt-[104px] 3xl:mt-[124px] lg:mt-[80px] xl:mt-[92px] lg:p-[35px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] rounded-radius16 w-[62%]">
          <Text className="font-semibold lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-indigo_500 w-[auto]">
            XÁC NHẬN EIO
          </Text>
          <Column className="mb-[2px] lg:mt-[53px] xl:mt-[61px] 2xl:mt-[68px] 3xl:mt-[82px] w-[78%]">
            <Column className="pb-[3px] rounded-radius4 w-[33%]">
              <Text className="font-light lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 w-[auto]">
                Danh sách mã EIO:{" "}
              </Text>
              <Row className="lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] pl-[3px] py-[3px] w-[95%]">
                <Button
                  className="flex lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] items-center justify-center lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                  shape="icbRoundedBorder1"
                  size="smIcn"
                  variant="icbFillLightblue800"
                >
                  <Img
                    src="images/img_checkmark.svg"
                    className="flex items-center justify-center"
                    alt="checkmark"
                  />
                </Button>
                <Text className="font-normal lg:ml-[12px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">
                  E0122323A342
                </Text>
              </Row>
              <Row className="ml-[3px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[93%]">
                <Img
                  src="images/img_computer.svg"
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                  alt="computer"
                />
                <Text className="font-normal lg:ml-[12px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">
                  E02323232045
                </Text>
              </Row>
              <Row className="ml-[3px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[93%]">
                <Img
                  src="images/img_computer.svg"
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                  alt="computer One"
                />
                <Text className="font-normal lg:ml-[12px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">
                  E02323232045
                </Text>
              </Row>
            </Column>
            <Row className="items-center justify-between lg:mt-[205px] xl:mt-[235px] 2xl:mt-[264px] 3xl:mt-[317px] w-[100%]">
              <Button
                className="font-medium lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-center uppercase w-[47%]"
                shape="RoundedBorder10"
              >
                HỦY
              </Button>
              <Button
                className="font-medium lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-center uppercase w-[47%]"
                shape="RoundedBorder10"
                variant="OutlineWhiteA700"
              >
                XÁC NHẬN
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default XcnhnEIOPage;
