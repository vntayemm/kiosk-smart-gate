import React from "react";

import { Column, Row, Img, Text, Button, Line, Stack } from "components";

const MnhnhthaotcxeraPage = () => {
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
          <Row className="items-center justify-between w-[97%]">
            <Button
              className="font-medium lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-center w-[31%]"
              shape="RoundedBorder10"
              variant="OutlineIndigo5001_2"
            >
              LÀN 1
            </Button>
            <Button
              className="font-normal not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-center w-[31%]"
              variant="FillRed400"
            >
              XE RA
            </Button>
          </Row>
          <Line className="bg-bluegray_400 h-[1px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] rounded-radius05 w-[97%]" />
          <Row className="lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] pb-[1px] w-[97%]">
            <Img
              src="images/img_iconcont.svg"
              className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] mt-[2px] lg:w-[16px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
              alt="ICONCONT"
            />
            <Text className="font-normal mb-[1px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-bluegray_900 w-[auto]">
              Biển số xe
            </Text>
            <Text className="font-medium xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[95px] mt-[3px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 w-[auto]">
              16H-9999
            </Text>
            <Img
              src="images/img_vector_gray_500.svg"
              className="lg:h-[13px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[60px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[1%]"
              alt="Vector One"
            />
            <Text className="font-normal mb-[1px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[32px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-bluegray_900 w-[auto]">
              Số rơ-moóc
            </Text>
            <Text className="font-medium lg:ml-[102px] xl:ml-[117px] 2xl:ml-[132px] 3xl:ml-[158px] mt-[3px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-bluegray_900 w-[auto]">
              32AFDSD3
            </Text>
          </Row>
          <Stack className="lg:h-[134px] xl:h-[153px] 2xl:h-[172px] 3xl:h-[206px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[64px] w-[97%]">
            <Column className="absolute bottom-[0] w-[100%]">
              <Stack className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] lg:ml-[463px] xl:ml-[530px] 2xl:ml-[596px] 3xl:ml-[715px] rounded-radius4 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]">
                <Img
                  src="images/img_trash.svg"
                  className="absolute lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius4 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                  alt="trash"
                />
              </Stack>
              <Stack className="xl:h-[103px] 2xl:h-[116px] 3xl:h-[139px] lg:h-[90px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]">
                <Stack className="absolute xl:h-[103px] 2xl:h-[116px] 3xl:h-[139px] lg:h-[90px] w-[100%]">
                  <Row className="absolute bg-white_A700 border border-gray_300 border-solid items-center lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] top-[0] w-[100%]">
                    <Text className="font-normal lg:ml-[21px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[33px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                      E12345679809
                    </Text>
                    <Text className="font-normal 3xl:ml-[102px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[85px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                      A231321312
                    </Text>
                    <Text className="font-normal 2xl:ml-[108px] 3xl:ml-[130px] lg:ml-[84px] xl:ml-[96px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                      A231321312
                    </Text>
                    <Text className="font-normal lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] mt-[3px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                      Rỗng
                    </Text>
                  </Row>
                  <Row className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] lg:p-[12px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
                    <Text className="font-normal lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[32px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                      E12391203903
                    </Text>
                    <Text className="font-normal 3xl:ml-[102px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[85px] mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                      A55435S432
                    </Text>
                    <Text className="font-normal 2xl:ml-[108px] 3xl:ml-[130px] lg:ml-[84px] xl:ml-[96px] mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                      A55435S432
                    </Text>
                    <Text className="font-normal mb-[4px] lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                      Rỗng
                    </Text>
                  </Row>
                </Stack>
                <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[47%]">
                  <Line className="bg-gray_300 xl:h-[101px] 2xl:h-[113px] 3xl:h-[136px] lg:h-[88px] w-[1px]" />
                  <Line className="bg-gray_300 xl:h-[101px] 2xl:h-[113px] 3xl:h-[136px] lg:h-[88px] lg:ml-[172px] xl:ml-[197px] 2xl:ml-[222px] 3xl:ml-[266px] w-[1px]" />
                  <Line className="bg-gray_300 xl:h-[101px] 2xl:h-[113px] 3xl:h-[136px] lg:h-[88px] lg:ml-[146px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[226px] w-[1px]" />
                </Row>
              </Stack>
            </Column>
            <Row className="absolute bg-indigo_500 justify-between lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] top-[0] w-[100%]">
              <Text className="font-bold lg:ml-[21px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[33px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                EIO
              </Text>
              <Text className="font-bold mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Số Cont
              </Text>
              <Text className="font-bold mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                F/E
              </Text>
              <Text className="font-bold 3xl:mr-[116px] lg:mr-[75px] xl:mr-[86px] 2xl:mr-[97px] my-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Tình trạng vỏ
              </Text>
            </Row>
          </Stack>
          <Line className="bg-bluegray_400 h-[1px] lg:mt-[236px] xl:mt-[270px] 2xl:mt-[303px] 3xl:mt-[364px] rounded-radius05 w-[97%]" />
          <Row className="items-center justify-center xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] lg:mt-[52px] xl:mt-[60px] 2xl:mt-[67px] 3xl:mt-[81px] w-[70%]">
            <Button
              className="font-medium lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-center uppercase w-[47%]"
              shape="RoundedBorder10"
            >
              XÁC NHẬN
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

export default MnhnhthaotcxeraPage;
