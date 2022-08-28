import React from "react";

import { Column, Row, Img, Text, Line, Stack, List, Button } from "components";

const ChititContainerPage = () => {
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
        <Column className="bg-white_A700_e5 items-center lg:mt-[185px] xl:mt-[212px] 2xl:mt-[239px] 3xl:mt-[287px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[32px] rounded-radius16 w-[73%]">
          <Text className="font-semibold lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-indigo_500 w-[auto]">
            THÔNG TIN CHI TIẾT CONTAINER
          </Text>
          <Line className="bg-gray_302 h-[3px] 3xl:mt-[114px] lg:mt-[74px] xl:mt-[85px] 2xl:mt-[95px] w-[43%]" />
          <Stack className="lg:h-[295px] xl:h-[337px] 2xl:h-[379px] 3xl:h-[455px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[94%]">
            <Line className="absolute bg-gray_202 h-[1px] inset-x-[0] mx-[auto] top-[19%] w-[43%]" />
            <Column className="absolute items-center w-[100%]">
              <Row className="w-[100%]">
                <Img
                  src="images/img_file.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] mt-[3px] w-[2%]"
                  alt="file"
                />
                <Text className="font-light mb-[1px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                  Số lệnh:{" "}
                </Text>
                <Text className="font-normal 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] mt-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                  E2231110022
                </Text>
                <Img
                  src="images/img_calendar.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] 3xl:ml-[102px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[85px] mt-[3px] w-[2%]"
                  alt="calendar"
                />
                <Text className="font-light mb-[1px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                  Hạn lệnh:{" "}
                </Text>
                <Text className="font-normal lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[32px] mt-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                  13/03/2022 23:58:59
                </Text>
              </Row>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] w-[100%]"
                orientation="vertical"
              >
                <Stack className="lg:h-[26px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:my-[19px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] w-[100%]">
                  <Line className="absolute bg-gray_202 bottom-[4%] h-[1px] left-[26%] w-[43%]" />
                  <Row className="absolute bottom-[0] justify-between left-[0] w-[44%]">
                    <Img
                      src="images/img_vector_gray_500_16X15.svg"
                      className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[5%]"
                      alt="Vector One"
                    />
                    <Text className="font-light mb-[1px] lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                      Số container:{" "}
                    </Text>
                    <Text className="font-normal my-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                      MRSUS098529
                    </Text>
                  </Row>
                  <Row className="absolute h-[max-content] inset-y-[0] items-center my-[auto] right-[0] w-[46%]">
                    <Img
                      src="images/img_computer_14X13.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] w-[4%]"
                      alt="computer"
                    />
                    <Text className="font-light mb-[1px] lg:ml-[12px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                      Tác nghiệp:{" "}
                    </Text>
                    <Text className="font-normal xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[95px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                      Lấy nguyên
                    </Text>
                  </Row>
                </Stack>
                <Line className="self-center w-[43%] h-[1px] bg-gray_202" />
                <Stack className="lg:h-[25px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[38px] lg:my-[19px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] w-[100%]">
                  <Line className="absolute bg-gray_202 h-[1px] left-[26%] top-[36%] w-[43%]" />
                  <Row className="absolute justify-end left-[0] w-[44%]">
                    <Text className="font-bold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-gray_500 w-[auto]">
                      TLHQ
                    </Text>
                    <Text className="font-light 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                      TLHQ:{" "}
                    </Text>
                    <Text className="font-normal mb-[2px] lg:ml-[159px] xl:ml-[182px] 2xl:ml-[205px] 3xl:ml-[246px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-indigo_500 w-[auto]">
                      Release
                    </Text>
                  </Row>
                  <Row className="absolute items-center right-[0] top-[0] w-[46%]">
                    <Img
                      src="images/img_volume.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] w-[4%]"
                      alt="volume"
                    />
                    <Text className="font-light lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                      Thanh toán:{" "}
                    </Text>
                    <Text className="font-normal lg:ml-[61px] xl:ml-[70px] 2xl:ml-[78px] 3xl:ml-[94px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-red_A400 w-[auto]">
                      Đã thanh toán
                    </Text>
                  </Row>
                </Stack>
              </List>
              <Stack className="lg:h-[101px] xl:h-[116px] 2xl:h-[130px] 3xl:h-[156px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] w-[100%]">
                <Line className="absolute bg-gray_202 h-[1px] inset-x-[0] mx-[auto] top-[46%] w-[43%]" />
                <Column className="absolute w-[100%]">
                  <Row className="w-[100%]">
                    <Img
                      src="images/img_television.svg"
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] mt-[1px] w-[2%]"
                      alt="television"
                    />
                    <Text className="font-light mb-[1px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                      Vị trí trong bãi
                    </Text>
                    <Text className="font-normal lg:ml-[107px] xl:ml-[122px] 2xl:ml-[137px] 3xl:ml-[165px] mt-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                      ABFD
                    </Text>
                    <Img
                      src="images/img_qrcode.svg"
                      className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] mt-[4px] w-[2%]"
                      alt="qrcode"
                    />
                    <Text className="font-light mb-[1px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                      Thiết bị nâng hạ
                    </Text>
                    <Text className="font-normal xl:ml-[106px] 2xl:ml-[119px] 3xl:ml-[143px] lg:ml-[92px] mt-[2px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                      5ABFD
                    </Text>
                  </Row>
                  <Line className="bg-gray_202 h-[1px] lg:ml-[196px] xl:ml-[225px] 2xl:ml-[253px] 3xl:ml-[303px] 3xl:mt-[114px] lg:mt-[74px] xl:mt-[85px] 2xl:mt-[95px] w-[42%]" />
                </Column>
              </Stack>
            </Column>
          </Stack>
          <Button
            className="font-medium lg:mb-[37px] xl:mb-[42px] 2xl:mb-[47px] 3xl:mb-[57px] mt-[2px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-center uppercase w-[22%]"
            shape="RoundedBorder10"
            variant="OutlineIndigo5001_2"
          >
            IN PHIẾU
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default ChititContainerPage;
