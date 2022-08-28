import React from "react";

import { Stack, Column, Text, Input, Row, Button, Img } from "components";

const EIOinthcngcliPage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-roboto 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] mx-[auto] w-[100%]">
        <Column className="absolute bg-white_A700_ab bottom-[17%] inset-x-[0] items-center mx-[auto] lg:p-[35px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] rounded-radius16 w-[62%]">
          <Text className="font-semibold lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-indigo_500 w-[auto]">
            XÁC NHẬN EIO
          </Text>
          <Column className="lg:mb-[32px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[50px] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[78%]">
            <Column className="rounded-radius4 w-[79%]">
              <Text className="font-light xl:mr-[111px] 2xl:mr-[125px] 3xl:mr-[150px] lg:mr-[97px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 w-[auto]">
                Bạn chuẩn bị thao tác với mã EIO:{" "}
              </Text>
              <Text className="font-semibold lg:ml-[106px] xl:ml-[121px] 2xl:ml-[136px] 3xl:ml-[163px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[30px] xl:text-[35px] 2xl:text-[39px] 3xl:text-[47px] text-red_A700 w-[auto]">
                E220610090900200
              </Text>
            </Column>
            <Text className="font-light italic lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[64px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_901 w-[auto]">
              Nếu không đúng, hãy điền mã EIO cần thao tác:
            </Text>
            <Input
              className="w-[100%]"
              wrapClassName="2xl:h-[71px] 2xl:mt-[7px] 3xl:h-[85px] 3xl:mt-[8px] flex lg:h-[55px] lg:mt-[5px] w-[100%] xl:h-[63px] xl:mt-[6px]"
              name="Rectangle265"
              placeholder=""
              shape="RoundedBorder10"
            ></Input>
            <Row className="items-center justify-between 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] 2xl:mt-[92px] w-[100%]">
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
        <header className="absolute top-[0] w-[100%]">
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
        <Column className="absolute bg-bluegray_900_bf items-center justify-end lg:p-[300px] xl:p-[344px] 2xl:p-[386px] 3xl:p-[464px] w-[100%]">
          <Column className="bg-white_A700 lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:p-[17px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius8 shadow-bs w-[84%]">
            <Row className="items-center justify-between lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:pr-[18px] xl:pr-[21px] 2xl:pr-[23px] 3xl:pr-[28px] lg:pt-[18px] xl:pt-[21px] 2xl:pt-[23px] 3xl:pt-[28px] w-[96%]">
              <Text className="font-bold mt-[2px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-red_A700 w-[auto]">
                Thông báo lỗi
              </Text>
              <Stack className="lg:h-[14px] xl:h-[16px] 2xl:h-[17px] 3xl:h-[21px] rounded-radius4 lg:w-[13px] xl:w-[15px] 2xl:w-[16px] 3xl:w-[20px]">
                <Img
                  src="images/img_close.svg"
                  className="absolute lg:h-[14px] xl:h-[16px] 2xl:h-[17px] 3xl:h-[21px] rounded-radius4 lg:w-[13px] xl:w-[15px] 2xl:w-[16px] 3xl:w-[20px]"
                  alt="close"
                />
              </Stack>
            </Row>
            <Text className="font-normal lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 w-[auto]">
              Không tìm thấy EIO trên hệ thống!
            </Text>
            <Button
              className="font-medium lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] lg:ml-[308px] xl:ml-[352px] 2xl:ml-[396px] 3xl:ml-[476px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-center tracking-ls1 w-[19%]"
              shape="RoundedBorder4"
              variant="FillIndigo500"
            >
              OK
            </Button>
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default EIOinthcngcliPage;
