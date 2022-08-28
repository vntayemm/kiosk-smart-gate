import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Line,
  Input,
  Button,
} from "components";

const InphiuvtrChachnEIOPage = () => {
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
        <Column className="bg-white_A700_e5 items-center 3xl:mt-[101px] lg:mt-[65px] xl:mt-[75px] 2xl:mt-[84px] lg:p-[33px] xl:p-[38px] 2xl:p-[43px] 3xl:p-[52px] rounded-radius16 w-[73%]">
          <Text className="font-semibold lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-indigo_500 w-[auto]">
            PHIẾU VỊ TRÍ
          </Text>
          <Row className="justify-center lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] w-[71%]">
            <Text className="font-light lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_901 w-[auto]">
              Chọn EIO để xem
            </Text>
            <Column className="lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] w-[66%]">
              <SelectBox
                className="font-light lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[100%]"
                placeholderClassName="text-black_901"
                name="Group27744"
                placeholder="Chọn một lựa chọn"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown.svg"
                    className="lg:w-[18px] lg:h-[8px] lg:mr-[20px] xl:w-[21px] xl:h-[9px] xl:mr-[23px] 2xl:w-[23px] 2xl:h-[10px] 2xl:mr-[26px] 3xl:w-[28px] 3xl:h-[12px] 3xl:mr-[32px]"
                    alt="arrow_down"
                  />
                }
                size="md"
              ></SelectBox>
              <Column className="bg-white_A700 border border-gray_200 border-solid ml-[1px] p-[3px] shadow-bs1 w-[99%]">
                <Text className="font-light lg:ml-[12px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  E1292921012
                </Text>
                <Line className="bg-gray_201 h-[1px] lg:ml-[12px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[96%]" />
                <Input
                  className="font-light p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] placeholder:text-black_901 text-black_901 w-[100%]"
                  wrapClassName="2xl:ml-[15px] 2xl:mt-[14px] 3xl:ml-[18px] 3xl:mt-[16px] lg:ml-[12px] lg:mt-[10px] w-[96%] xl:ml-[13px] xl:mt-[12px]"
                  name="GroupFortyThree"
                  placeholder="E1293923239"
                  size="lg"
                  variant="UnderLineGray201"
                ></Input>
                <Text className="font-light lg:ml-[13px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  E1293923240
                </Text>
              </Column>
              <Line className="bg-gray_201 h-[1px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[59%]" />
            </Column>
          </Row>
          <Row className="items-center justify-center lg:mb-[13px] xl:mb-[15px] 2xl:mb-[16px] 3xl:mb-[20px] lg:mt-[415px] xl:mt-[475px] 2xl:mt-[534px] 3xl:mt-[641px] w-[65%]">
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
              IN TẤT CẢ
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default InphiuvtrChachnEIOPage;
