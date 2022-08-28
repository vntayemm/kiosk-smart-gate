import React from "react";

import { Column, Row, Img, Text, Line, Stack, Button } from "components";

const ADMINngnhpPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-roboto lg:h-[1120px] xl:h-[1281px] 2xl:h-[1441px] 3xl:h-[1729px] items-center mx-[auto] w-[100%]">
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
        <Column className="bg-white_A700_a2 items-center justify-end lg:mt-[147px] xl:mt-[168px] 2xl:mt-[189px] 3xl:mt-[227px] lg:p-[35px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] rounded-radius16 w-[72%]">
          <Img
            src="images/img_logo.png"
            className="lg:h-[144px] xl:h-[164px] 2xl:h-[185px] 3xl:h-[222px] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[23%]"
            alt="logo"
          />
          <Column className="lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[59px] w-[100%]">
            <Text className="font-light lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-black_901 w-[auto]">
              <span className="text-black_901 font-roboto">Tên đăng nhập </span>
              <span className="text-red_A700 font-roboto">*</span>
            </Text>
            <Column className="bg-white_A700 lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:p-[29px] xl:p-[33px] 2xl:p-[37px] 3xl:p-[45px] rounded-radius10 w-[100%]">
              <Line className="bg-gray_601 lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] mb-[1px] ml-[1px] w-[1px]" />
            </Column>
            <Text className="font-light lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-black_901 w-[auto]">
              <span className="text-black_901 font-roboto">Mật khẩu </span>
              <span className="text-red_A700 font-roboto">*</span>
            </Text>
            <Stack className="bg-white_A700 2xl:h-[105px] 3xl:h-[125px] lg:h-[81px] xl:h-[93px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:px-[25px] xl:px-[28px] 2xl:px-[32px] 3xl:px-[38px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_eye.svg"
                className="absolute lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] inset-y-[0] my-[auto] right-[0] w-[6%]"
                alt="eye"
              />
            </Stack>
            <Button
              className="font-medium lg:ml-[224px] xl:ml-[256px] 2xl:ml-[288px] 3xl:ml-[346px] lg:mt-[45px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] lg:text-[22px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px] text-center uppercase w-[40%]"
              shape="RoundedBorder12"
              size="md"
              variant="OutlineWhiteA7001_2"
            >
              ĐĂNG NHẬP
            </Button>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ADMINngnhpPage;
