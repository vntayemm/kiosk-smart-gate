import React from "react";

import {
  Stack,
  Img,
  Column,
  Text,
  Line,
  Row,
  RadioGroup,
  Radio,
  SelectBox,
  Input,
  Button,
} from "components";

const CuhnhlnthitbngoiviPage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-roboto lg:h-[1443px] xl:h-[1651px] 2xl:h-[1857px] 3xl:h-[2228px] mx-[auto] w-[100%]">
        <Img
          src="images/img_bg.png"
          className="absolute lg:h-[1432px] xl:h-[1638px] 2xl:h-[1843px] 3xl:h-[2211px] w-[100%]"
          alt="bg"
        />
        <Column className="absolute bg-white_A700_a2 h-[max-content] inset-[0] items-center justify-center m-[auto] lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius20 w-[70%]">
          <Text className="font-semibold lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-indigo_500 w-[auto]">
            CẤU HÌNH{" "}
          </Text>
          <Column className="lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[96%]">
            <Text className="font-light lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_901 w-[auto]">
              <span className="text-black_901 font-roboto">Địa chỉ IP </span>
              <span className="text-red_A700 font-roboto">*</span>
            </Text>
            <div className="bg-white_A700 lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-radius10 w-[100%]"></div>
            <Column className="bg-white_A700 lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:py-[19px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px] w-[100%]">
              <Text className="font-bold lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">
                Cấu hình làn
              </Text>
              <Line className="bg-gray_301 h-[1px] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[100%]" />
              <Column className="mb-[4px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[65%]">
                <Row className="items-center py-[2px] w-[79%]">
                  <Text className="font-light lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_901 w-[auto]">
                    Loại làn
                  </Text>
                  <RadioGroup
                    className="flex mb-[1px] lg:ml-[59px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[91px] w-[66%]"
                    name="radiogrouplabel"
                  >
                    <Radio
                      value="Lnvo"
                      className="font-light lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900"
                      inputClassName="h-[25.6px] mr-[5px] w-[25.6px]"
                      checked={false}
                      name="radiogrouplabel"
                      label="Ln vo"
                    ></Radio>
                    <Radio
                      value="Lnra"
                      className="font-light lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900"
                      inputClassName="h-[25.6px] mr-[5px] w-[25.6px]"
                      checked={false}
                      name="radiogrouplabel"
                      label="Ln ra"
                      variant="FillBluegray401"
                    ></Radio>
                  </RadioGroup>
                </Row>
                <Row className="justify-between lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[100%]">
                  <Text className="font-light lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto">Số làn </span>
                    <span className="text-red_A700 font-roboto">*</span>
                  </Text>
                  <Column className="mt-[1px] w-[73%]">
                    <SelectBox
                      className="font-light lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[100%]"
                      placeholderClassName="text-black_901"
                      name="Group27744"
                      placeholder="Chọn làn"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="lg:w-[18px] lg:h-[8px] lg:mr-[20px] xl:w-[21px] xl:h-[9px] xl:mr-[23px] 2xl:w-[23px] 2xl:h-[10px] 2xl:mr-[26px] 3xl:w-[28px] 3xl:h-[12px] 3xl:mr-[32px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Column className="bg-white_A700 border border-gray_200 border-solid ml-[1px] p-[3px] shadow-bs1 w-[99%]">
                      <Text className="font-light lg:ml-[12px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                        IN01
                      </Text>
                      <Line className="bg-gray_201 h-[1px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[96%]" />
                      <Input
                        className="font-light p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] placeholder:text-black_901 text-black_901 w-[100%]"
                        wrapClassName="2xl:ml-[14px] 2xl:mt-[11px] 3xl:ml-[16px] 3xl:mt-[13px] lg:ml-[10px] lg:mt-[8px] w-[96%] xl:ml-[12px] xl:mt-[10px]"
                        name="GroupFortyNine"
                        placeholder="IN02"
                        size="lg"
                        variant="UnderLineGray201"
                      ></Input>
                      <Text className="font-light lg:ml-[12px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:my-[12px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                        GATEIN03
                      </Text>
                    </Column>
                    <Line className="bg-gray_201 h-[1px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] w-[59%]" />
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="bg-white_A700 lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:py-[21px] xl:py-[25px] 2xl:py-[28px] 3xl:py-[33px] w-[100%]">
              <Text className="font-bold lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">
                Cấu hình thiết bị ngoại vi
              </Text>
              <Line className="bg-gray_301 h-[1px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] w-[100%]" />
              <Stack className="lg:h-[144px] xl:h-[164px] 2xl:h-[185px] 3xl:h-[222px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] w-[79%]">
                <Stack className="absolute lg:h-[112px] xl:h-[128px] 2xl:h-[144px] 3xl:h-[173px] top-[0] w-[100%]">
                  <Column className="absolute bottom-[0] w-[100%]">
                    <Stack className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] lg:ml-[389px] xl:ml-[445px] 2xl:ml-[500px] 3xl:ml-[601px] rounded-radius4 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]">
                      <Img
                        src="images/img_trash.svg"
                        className="absolute lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius4 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                        alt="trash"
                      />
                    </Stack>
                    <Stack className="3xl:h-[117px] lg:h-[76px] xl:h-[87px] 2xl:h-[98px] mt-[4px] w-[100%]">
                      <Column className="absolute items-center w-[100%]">
                        <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-end 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                          <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                            LASER PRINTER TX1
                          </Text>
                          <Stack className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] lg:ml-[106px] xl:ml-[121px] 2xl:ml-[136px] 3xl:ml-[163px] mr-[4px] mt-[1px] rounded-radius4 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]">
                            <Img
                              src="images/img_trash.svg"
                              className="absolute lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius4 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                              alt="trash One"
                            />
                          </Stack>
                        </Row>
                        <Row className="bg-white_A700 border border-gray_300 border-solid justify-between 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                          <Text className="font-normal lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                            1 Chậu lớn
                          </Text>
                          <Text className="font-normal mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                            BARCODE A1
                          </Text>
                          <Stack className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] mb-[4px] mr-[4px] rounded-radius4 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]">
                            <Img
                              src="images/img_trash.svg"
                              className="absolute lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius4 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                              alt="trash Two"
                            />
                          </Stack>
                        </Row>
                      </Column>
                      <Line className="absolute bg-gray_300 3xl:h-[114px] lg:h-[74px] xl:h-[84px] 2xl:h-[95px] inset-y-[0] left-[47%] my-[auto] w-[1px]" />
                    </Stack>
                  </Column>
                  <Row className="absolute bg-indigo_500 items-center justify-end pl-[1px] py-[1px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] top-[0] w-[100%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                      Loại thiết bị
                    </Text>
                    <Text className="font-bold lg:ml-[197px] xl:ml-[226px] 2xl:ml-[254px] 3xl:ml-[305px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                      Tên thiết bị
                    </Text>
                    <Img
                      src="images/img_image3.png"
                      className="lg:h-[38px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] mb-[1px] lg:ml-[153px] xl:ml-[175px] 2xl:ml-[197px] 3xl:ml-[236px] w-[8%]"
                      alt="imageThree"
                    />
                  </Row>
                </Stack>
                <Column className="absolute bottom-[0] left-[5%] w-[37%]">
                  <SelectBox
                    className="font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-black_901 w-[100%]"
                    placeholderClassName="text-black_901"
                    name="Group27744 One"
                    placeholder="Chọn loại thiết bị"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="lg:w-[10px] lg:h-[5px] lg:mr-[12px] xl:w-[12px] xl:h-[6px] xl:mr-[13px] 2xl:w-[14px] 2xl:h-[6px] 2xl:mr-[15px] 3xl:w-[16px] 3xl:h-[7px] 3xl:mr-[18px]"
                        alt="arrow_down"
                      />
                    }
                    size="sm"
                  ></SelectBox>
                  <Column className="bg-white_A700 border border-gray_200 border-solid ml-[1px] p-[2px] shadow-bs1 w-[99%]">
                    <Text className="font-light 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[4px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-black_901 w-[auto]">
                      Máy in kim
                    </Text>
                    <Line className="bg-gray_201 h-[1px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[2px] w-[96%]" />
                    <Text className="font-light 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[4px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-black_901 w-[auto]">
                      Máy in nhiệt
                    </Text>
                    <Line className="bg-gray_201 h-[1px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[2px] w-[96%]" />
                    <Text className="font-light mb-[1px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-black_901 w-[auto]">
                      Máy quét mã vạch
                    </Text>
                  </Column>
                  <Line className="bg-gray_201 h-[1px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] w-[59%]" />
                </Column>
              </Stack>
            </Column>
            <Row className="items-center justify-between lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[86px] w-[100%]">
              <Button
                className="font-medium mt-[1px] lg:text-[22px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px] text-center uppercase w-[48%]"
                shape="RoundedBorder12"
                size="md"
                variant="OutlineIndigo5001_2"
              >
                HỦY
              </Button>
              <Button
                className="font-medium mb-[1px] lg:text-[22px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px] text-center uppercase w-[48%]"
                shape="RoundedBorder12"
                size="md"
                variant="OutlineWhiteA7001_2"
              >
                LƯU
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
      </Stack>
    </>
  );
};

export default CuhnhlnthitbngoiviPage;
