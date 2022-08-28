import React from "react";

import { Column, Row, Img, Text, Line, Stack, Button } from "components";

const InEIOthcngPage = () => {
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
          <Column className="mb-[2px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[79%]">
            <Text className="font-light italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_901 w-[auto]">
              Hãy điền mã EIO cần thao tác:
            </Text>
            <Column className="bg-white_A700 lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] lg:p-[15px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] rounded-radius10 w-[100%]">
              <Line className="bg-gray_601 lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] mb-[1px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1px]" />
            </Column>
            <Row className="bg-indigo_500 items-center justify-end ml-[auto] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:pr-[16px] xl:pr-[18px] 2xl:pr-[21px] 3xl:pr-[25px] rounded-radius4 w-[31%]">
              <Img
                src="images/img_image3.png"
                className="lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                alt="imageThree"
              />
              <Text className="font-bold 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-white_A700 w-[auto]">
                THÊM MỚI
              </Text>
            </Row>
            <Stack className="3xl:h-[112px] lg:h-[73px] xl:h-[83px] 2xl:h-[93px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[100%]">
              <Row className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] items-center justify-between 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  E122190209
                </Text>
                <Stack className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] mr-[2px] mt-[1px] rounded-radius4 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]">
                  <Img
                    src="images/img_trash.svg"
                    className="absolute lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius4 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                    alt="trash"
                  />
                </Stack>
              </Row>
              <Stack className="absolute lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] right-[27%] rounded-radius4 top-[17%] lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]">
                <Img
                  src="images/img_trash.svg"
                  className="absolute lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius4 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                  alt="trash One"
                />
              </Stack>
              <Text className="absolute bg-indigo_500 font-bold lg:pb-[13px] xl:pb-[15px] 2xl:pb-[16px] 3xl:pb-[20px] lg:pl-[24px] xl:pl-[27px] 2xl:pl-[30px] 3xl:pl-[37px] xl:pt-[10px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 top-[0] w-[450px]">
                Danh sách EIO đã điền
              </Text>
            </Stack>
            <Row className="bg-white_A700 border border-gray_300 border-solid justify-between 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
              <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                E120220210
              </Text>
              <Stack className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] mb-[4px] mr-[2px] rounded-radius4 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]">
                <Img
                  src="images/img_trash.svg"
                  className="absolute lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius4 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                  alt="trash Two"
                />
              </Stack>
            </Row>
            <Row className="items-center justify-between ml-[1px] xl:mt-[113px] 2xl:mt-[128px] 3xl:mt-[153px] lg:mt-[99px] w-[99%]">
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

export default InEIOthcngPage;
