import React from "react";

import { Column, Row, Img, Text, SelectBox, Stack, Button } from "components";

const InphiuvtrchnEIOPage = () => {
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
          <Row className="items-center justify-center lg:mt-[47px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[71%]">
            <Text className="font-light lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_901 w-[auto]">
              Chọn EIO để xem
            </Text>
            <SelectBox
              className="font-light lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[66%]"
              placeholderClassName="text-black_901"
              name="Group27744"
              placeholder="E1232132138539"
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
          </Row>
          <Stack
            className="bg-cover bg-repeat lg:h-[484px] xl:h-[553px] 2xl:h-[622px] 3xl:h-[747px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:px-[21px] xl:px-[25px] 2xl:px-[28px] 3xl:px-[33px] w-[90%]"
            style={{ backgroundImage: "url('images/img_group27763.svg')" }}
          >
            <Column className="absolute bottom-[1%] items-end right-[4%] w-[10%]">
              <Text className="font-normal mr-[3px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 w-[auto]">
                B212121
              </Text>
              <Text className="font-normal lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 w-[auto]">
                ABC
              </Text>
            </Column>
            <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[85%]">
              <Text className="font-light lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                CÔNG TY CỔ PHẦN CẢNG HẢI PHÒNG
              </Text>
              <Text className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 w-[auto]">
                CHI NHÁNH CẢNG TÂN VŨ
              </Text>
              <Column className="items-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[24%]">
                <Text className="font-light lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  Hotline: 0936868232
                </Text>
                <Text className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-indigo_500 w-[auto]">
                  POSITION SLIP
                </Text>
              </Column>
              <Column className="lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]">
                <Row className="items-center justify-evenly w-[100%]">
                  <Column className="w-[85%]">
                    <Text className="font-light lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                      Vị trí trong bãi
                    </Text>
                    <Text className="font-light italic mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                      Yard Location
                    </Text>
                  </Column>
                  <Text className="font-normal not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 w-[auto]">
                    AE-10-01-5
                  </Text>
                </Row>
                <Row className="items-end justify-evenly lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                  <Column className="w-[85%]">
                    <Text className="font-light lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                      Phương án thực hiện
                    </Text>
                    <Text className="font-light italic mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                      Transaction mode
                    </Text>
                  </Column>
                  <Text className="font-normal mb-[3px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 w-[auto]">
                    Lấy nguyên
                  </Text>
                </Row>
                <Row className="items-end justify-evenly lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                  <Column className="w-[81%]">
                    <Text className="font-light lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                      Số container
                    </Text>
                    <Text className="font-light italic mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                      Container No
                    </Text>
                  </Column>
                  <Text className="font-normal mb-[4px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 w-[auto]">
                    CCLU7112658
                  </Text>
                </Row>
                <Row className="items-end justify-evenly lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                  <Column className="w-[93%]">
                    <Text className="font-light lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                      Loại cont
                    </Text>
                    <Text className="font-light italic mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                      Cont ISO
                    </Text>
                  </Column>
                  <Text className="font-normal mb-[3px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 w-[auto]">
                    45G0
                  </Text>
                </Row>
                <Row className="items-end justify-evenly lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                  <Column className="w-[91%]">
                    <Text className="font-light lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                      Thiết bị nâng hạ
                    </Text>
                    <Text className="font-light italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                      LOLO CHE
                    </Text>
                  </Column>
                  <Text className="font-normal mb-[3px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 w-[auto]">
                    RTG29
                  </Text>
                </Row>
                <Text className="font-light ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  Só BAT
                </Text>
                <Text className="font-light italic ml-[1px] mt-[3px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  BAT No
                </Text>
                <Text className="font-light xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  Tình trạng cont
                </Text>
                <Text className="font-light italic mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  Cont state
                </Text>
              </Column>
            </Column>
          </Stack>
          <Row className="items-center justify-center lg:mb-[13px] xl:mb-[15px] 2xl:mb-[16px] 3xl:mb-[20px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[65%]">
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

export default InphiuvtrchnEIOPage;
