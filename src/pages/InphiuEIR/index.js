import React from "react";

import { Column, Row, Img, Text, Stack, Button } from "components";

const InphiuEIRPage = () => {
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
        <Column className="bg-white_A700_e5 items-center 3xl:mt-[101px] lg:mt-[65px] xl:mt-[75px] 2xl:mt-[84px] lg:p-[32px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] rounded-radius16 w-[73%]">
          <Text className="font-semibold lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-indigo_500 w-[auto]">
            PHIẾU EIR
          </Text>
          <Stack className="bg-gray_103 border border-gray_202 border-solid lg:h-[517px] xl:h-[591px] 2xl:h-[665px] 3xl:h-[797px] lg:mt-[57px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px] 3xl:px-[43px] rounded-radius15 w-[90%]">
            <Img
              src="images/img_phiugiaonhn.png"
              className="absolute lg:h-[360px] xl:h-[412px] 2xl:h-[463px] 3xl:h-[556px] inset-[0] justify-center m-[auto] w-[91%]"
              alt="phiugiaonhn"
            />
          </Stack>
          <Row className="items-center justify-center lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] 3xl:mt-[114px] lg:mt-[74px] xl:mt-[85px] 2xl:mt-[95px] w-[65%]">
            <Button
              className="font-medium lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-center uppercase w-[47%]"
              shape="RoundedBorder10"
            >
              BỎ QUA
            </Button>
            <Button
              className="font-medium lg:ml-[30px] xl:ml-[35px] 2xl:ml-[39px] 3xl:ml-[47px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-center uppercase w-[47%]"
              shape="RoundedBorder10"
              variant="OutlineWhiteA700"
            >
              IN PHIẾU
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default InphiuEIRPage;
