import React from "react";

import { Column, Row, Img, Text, List, Line, Input, Stack } from "components";

const TruyvniuchnhxemocPage = () => {
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
        <Column className="bg-white_A700_e5 items-center 3xl:mt-[101px] lg:mt-[65px] xl:mt-[75px] 2xl:mt-[84px] lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius16 w-[73%]">
          <Text className="font-semibold lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-indigo_500 w-[auto]">
            TRUY VẤN ĐIỀU CHỈNH XE/MOÓC
          </Text>
          <List
            className="gap-[0] lg:mb-[21px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[33px] min-h-[auto] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[94%]"
            orientation="vertical"
          >
            <Row className="items-center justify-between lg:my-[19px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] w-[100%]">
              <Input
                className="font-normal not-italic p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="w-[87%]"
                name="Username"
                placeholder="Tìm theo số container ..."
                shape="RoundedBorder10"
                size="sm"
              ></Input>
              <Stack className="bg-red_700 lg:h-[57px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[88px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius10 w-[9%]">
                <Img
                  src="images/img_search.svg"
                  className="absolute lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] inset-[0] justify-center m-[auto] lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                  alt="search"
                />
              </Stack>
            </Row>
            <Line className="self-center w-[100%] justify-between items-center" />
            <Row className="bg-white_A700 border border-gray_100 border-solid items-center justify-between lg:my-[19px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] lg:p-[24px] xl:p-[27px] 2xl:p-[30px] 3xl:p-[37px] rounded-radius6 w-[100%]">
              <Img
                src="images/img_image7.png"
                className="3xl:h-[103px] lg:h-[67px] xl:h-[77px] 2xl:h-[86px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] w-[10%]"
                alt="imageSeven"
              />
              <Column className="mr-[1px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[78%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="font-normal mb-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Số xe:
                    </span>
                    <span className="text-black_901 font-roboto"> 123A433</span>
                  </Text>
                  <Text className="font-normal mt-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Số moóc:
                    </span>
                    <span className="text-black_901 font-roboto">
                      {" "}
                      A14B232N4
                    </span>
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[94%]">
                  <Text className="font-normal mb-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Số lệnh:
                    </span>
                    <span className="text-black_901 font-roboto"> 123A433</span>
                  </Text>
                  <Text className="font-normal lg:ml-[140px] xl:ml-[160px] 2xl:ml-[180px] 3xl:ml-[216px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Hạn lệnh:
                    </span>
                    <span className="text-black_901 font-roboto"> </span>
                    <span className="text-black_901 font-roboto">123A433</span>
                  </Text>
                </Row>
                <Row className="lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[86%]">
                  <Text className="font-normal mt-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Tác nghiệp:
                    </span>
                    <span className="text-black_901 font-roboto"> </span>
                    <span className="text-black_901 font-roboto">
                      Lấy nguyên
                    </span>
                  </Text>
                  <Text className="font-normal 2xl:ml-[109px] 3xl:ml-[131px] lg:ml-[85px] xl:ml-[97px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Số container:
                    </span>
                    <span className="text-black_901 font-roboto"> </span>
                    <span className="text-black_901 font-roboto">5</span>
                  </Text>
                </Row>
              </Column>
            </Row>
            <Line className="self-center w-[100%] justify-between items-center" />
            <Row className="bg-white_A700 border border-gray_100 border-solid items-center justify-between lg:my-[19px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] lg:p-[24px] xl:p-[27px] 2xl:p-[30px] 3xl:p-[37px] rounded-radius6 w-[100%]">
              <Img
                src="images/img_image7.png"
                className="3xl:h-[103px] lg:h-[67px] xl:h-[77px] 2xl:h-[86px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] w-[10%]"
                alt="imageSeven One"
              />
              <Column className="mr-[1px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[78%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="font-normal mb-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Số xe:
                    </span>
                    <span className="text-black_901 font-roboto"> 123A433</span>
                  </Text>
                  <Text className="font-normal mt-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Số moóc:
                    </span>
                    <span className="text-black_901 font-roboto">
                      {" "}
                      A14B232N4
                    </span>
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[94%]">
                  <Text className="font-normal mb-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Số lệnh:
                    </span>
                    <span className="text-black_901 font-roboto"> 123A433</span>
                  </Text>
                  <Text className="font-normal lg:ml-[140px] xl:ml-[160px] 2xl:ml-[180px] 3xl:ml-[216px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Hạn lệnh:
                    </span>
                    <span className="text-black_901 font-roboto"> </span>
                    <span className="text-black_901 font-roboto">123A433</span>
                  </Text>
                </Row>
                <Row className="lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[86%]">
                  <Text className="font-normal mt-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Tác nghiệp:
                    </span>
                    <span className="text-black_901 font-roboto"> </span>
                    <span className="text-black_901 font-roboto">
                      Lấy nguyên
                    </span>
                  </Text>
                  <Text className="font-normal 2xl:ml-[109px] 3xl:ml-[131px] lg:ml-[85px] xl:ml-[97px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Số container:
                    </span>
                    <span className="text-black_901 font-roboto"> </span>
                    <span className="text-black_901 font-roboto">5</span>
                  </Text>
                </Row>
              </Column>
            </Row>
            <Line className="self-center w-[100%] justify-between items-center" />
            <Row className="bg-white_A700 border border-gray_100 border-solid items-center justify-between lg:my-[19px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] lg:p-[24px] xl:p-[27px] 2xl:p-[30px] 3xl:p-[37px] rounded-radius6 w-[100%]">
              <Img
                src="images/img_image7.png"
                className="3xl:h-[103px] lg:h-[67px] xl:h-[77px] 2xl:h-[86px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] w-[10%]"
                alt="imageSeven Two"
              />
              <Column className="mr-[1px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[78%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="font-normal mb-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Số xe:
                    </span>
                    <span className="text-black_901 font-roboto"> 123A433</span>
                  </Text>
                  <Text className="font-normal mt-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Số moóc:
                    </span>
                    <span className="text-black_901 font-roboto">
                      {" "}
                      A14B232N4
                    </span>
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[94%]">
                  <Text className="font-normal mb-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Số lệnh:
                    </span>
                    <span className="text-black_901 font-roboto"> 123A433</span>
                  </Text>
                  <Text className="font-normal lg:ml-[140px] xl:ml-[160px] 2xl:ml-[180px] 3xl:ml-[216px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Hạn lệnh:
                    </span>
                    <span className="text-black_901 font-roboto"> </span>
                    <span className="text-black_901 font-roboto">123A433</span>
                  </Text>
                </Row>
                <Row className="lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[86%]">
                  <Text className="font-normal mt-[1px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Tác nghiệp:
                    </span>
                    <span className="text-black_901 font-roboto"> </span>
                    <span className="text-black_901 font-roboto">
                      Lấy nguyên
                    </span>
                  </Text>
                  <Text className="font-normal 2xl:ml-[109px] 3xl:ml-[131px] lg:ml-[85px] xl:ml-[97px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light">
                      Số container:
                    </span>
                    <span className="text-black_901 font-roboto"> </span>
                    <span className="text-black_901 font-roboto">5</span>
                  </Text>
                </Row>
              </Column>
            </Row>
          </List>
        </Column>
      </Column>
    </>
  );
};

export default TruyvniuchnhxemocPage;
