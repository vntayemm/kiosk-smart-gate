import React from "react";

import { Column, Row, Img, Text, Stack, Line, Button } from "components";

const MnhnhthaotcxevoPage = () => {
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
        <Column className="bg-white_A700_e5 items-center 3xl:mt-[101px] lg:mt-[65px] xl:mt-[75px] 2xl:mt-[84px] lg:p-[61px] xl:p-[70px] 2xl:p-[78px] 3xl:p-[94px] rounded-radius16 w-[73%]">
          <Stack className="lg:h-[415px] xl:h-[475px] 2xl:h-[534px] 3xl:h-[640px] w-[97%]">
            <Stack className="absolute lg:h-[415px] xl:h-[475px] 2xl:h-[534px] 3xl:h-[640px] w-[100%]">
              <Line className="absolute bg-black_901 h-[1px] rounded-radius05 top-[22%] w-[100%]" />
              <Column className="absolute items-end left-[0] w-[100%]">
                <Button
                  className="font-normal not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-center w-[31%]"
                  variant="FillRed400"
                >
                  XE VÀO
                </Button>
                <Stack className="lg:h-[289px] xl:h-[331px] 2xl:h-[372px] 3xl:h-[446px] lg:mt-[59px] xl:mt-[67px] 2xl:mt-[75px] 3xl:mt-[91px] w-[100%]">
                  <Column className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] w-[3%]">
                    <Img
                      src="images/img_iconcont.svg"
                      className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:w-[16px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                      alt="ICONCONT"
                    />
                    <Img
                      src="images/img_vector_gray_500_16X15.svg"
                      className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] ml-[1px] lg:mt-[112px] xl:mt-[128px] 2xl:mt-[144px] 3xl:mt-[173px] lg:w-[16px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                      alt="Vector One"
                    />
                    <Img
                      src="images/img_vector_gray_500_16X15.svg"
                      className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:mt-[52px] xl:mt-[60px] 2xl:mt-[67px] 3xl:mt-[81px] lg:w-[16px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                      alt="Vector Two"
                    />
                    <Img
                      src="images/img_iconcont.svg"
                      className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] ml-[3px] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] lg:w-[16px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                      alt="ICONCONT One"
                    />
                  </Column>
                  <Column className="absolute bottom-[0] left-[1%] w-[99%]">
                    <Row className="justify-end ml-[auto] w-[95%]">
                      <Text className="font-normal mt-[4px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-bluegray_900 w-[auto]">
                        Biển số xe
                      </Text>
                      <Text className="font-medium lg:ml-[475px] xl:ml-[544px] 2xl:ml-[612px] 3xl:ml-[734px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 w-[auto]">
                        16H-9999
                      </Text>
                    </Row>
                    <Row className="items-end lg:mt-[39px] xl:mt-[45px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
                      <Img
                        src="images/img_vector_gray_500.svg"
                        className="lg:h-[13px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[1%]"
                        alt="Vector Three"
                      />
                      <Text className="font-normal lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[32px] my-[1px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-bluegray_900 w-[auto]">
                        Số rơ-moóc
                      </Text>
                      <Text className="font-medium mb-[4px] lg:ml-[457px] xl:ml-[522px] 2xl:ml-[588px] 3xl:ml-[705px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-bluegray_900 w-[auto]">
                        32AFDSD3
                      </Text>
                    </Row>
                    <Column className="items-center lg:ml-[31px] xl:ml-[36px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[43px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] w-[95%]">
                      <Row className="justify-between w-[99%]">
                        <Text className="font-normal mt-[2px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-bluegray_900 w-[auto]">
                          Số container #1
                        </Text>
                        <Text className="font-medium lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 w-[auto]">
                          ELCU22121
                        </Text>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[48px] xl:mt-[55px] 2xl:mt-[61px] 3xl:mt-[74px] w-[100%]">
                        <Text className="font-normal not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-bluegray_900 w-[auto]">
                          Số container #2
                        </Text>
                        <Text className="font-medium lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 w-[auto]">
                          ELCU22122
                        </Text>
                      </Row>
                      <Row className="justify-between lg:mt-[45px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] w-[100%]">
                        <Text className="font-normal mt-[1px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-bluegray_900 w-[auto]">
                          Chở container
                        </Text>
                        <Text className="font-medium lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 w-[auto]">
                          CÓ
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Stack>
              </Column>
            </Stack>
            <Button
              className="absolute font-medium left-[0] lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-center top-[0] w-[31%]"
              shape="RoundedBorder10"
              variant="OutlineIndigo5001_2"
            >
              LÀN 1
            </Button>
          </Stack>
          <Text className="font-medium lg:mt-[143px] xl:mt-[163px] 2xl:mt-[184px] 3xl:mt-[221px] lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-black_901 uppercase w-[auto]">
            BẠN CÓ CHẮC CHẮN MUỐN LÀM LỆNH NÀY KHÔNG?
          </Text>
          <Row className="items-center justify-center xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[70%]">
            <Button
              className="font-medium lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-center uppercase w-[47%]"
              shape="RoundedBorder10"
            >
              HỦY
            </Button>
            <Button
              className="font-medium lg:ml-[30px] xl:ml-[35px] 2xl:ml-[39px] 3xl:ml-[47px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-center uppercase w-[47%]"
              shape="RoundedBorder10"
              variant="OutlineWhiteA700"
            >
              XÁC NHẬN
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default MnhnhthaotcxevoPage;
