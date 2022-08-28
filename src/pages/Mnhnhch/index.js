import React from "react";

import {
  Stack,
  Img,
  Row,
  Text,
  Column,
  SelectBox,
  Line,
  Input,
} from "components";

const MnhnhchPage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-roboto lg:h-[1120px] xl:h-[1281px] 2xl:h-[1441px] 3xl:h-[1729px] mx-[auto] lg:w-[1120px] xl:w-[1281px] 2xl:w-[1441px] 3xl:w-[1729px]">
        <Stack className="absolute 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] top-[0] w-[100%]">
          <Img
            src="images/img_bg.png"
            className="absolute 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] w-[100%]"
            alt="bg"
          />
          <header className="absolute top-[0] w-[100%]">
            <Stack className="bg-white_A700_ab lg:h-[101px] xl:h-[116px] 2xl:h-[130px] 3xl:h-[156px] w-[100%]">
              <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[95%]">
                <Img
                  src="images/img_slogan.png"
                  className="3xl:h-[115px] lg:h-[75px] xl:h-[86px] 2xl:h-[96px] w-[28%]"
                  alt="slogan"
                />
                <Row className="bg-indigo_500 items-center justify-center lg:p-[13px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius10 w-[21%]">
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
              <Row className="absolute bg-white_A700_ab items-center justify-between lg:p-[13px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] w-[100%]">
                <Img
                  src="images/img_slogan.png"
                  className="3xl:h-[115px] lg:h-[75px] xl:h-[86px] 2xl:h-[96px] lg:ml-[21px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[33px] w-[27%]"
                  alt="slogan One"
                />
                <Row className="bg-indigo_500 items-center justify-center lg:mr-[13px] xl:mr-[15px] 2xl:mr-[16px] 3xl:mr-[20px] lg:p-[13px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius10 w-[20%]">
                  <Img
                    src="images/img_vector.svg"
                    className="lg:h-[27px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] mb-[2px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:w-[26px] xl:w-[30px] 2xl:w-[33px] 3xl:w-[40px]"
                    alt="Vector One"
                  />
                  <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mr-[24px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[37px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[auto]">
                    1800599917
                  </Text>
                </Row>
              </Row>
            </Stack>
          </header>
          <Stack className="absolute bg-white_A700_ab bottom-[0] font-inter lg:h-[135px] xl:h-[154px] 2xl:h-[174px] 3xl:h-[208px] w-[100%]">
            <Column className="absolute bg-white_A700 lg:p-[15px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] top-[0] w-[100%]">
              <Text className="font-normal lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] 3xl:mb-[64px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-indigo_500 w-[auto]">
                CÔNG TY CỔ PHẦN CẢNG HẢI PHÒNG
              </Text>
            </Column>
            <Column className="absolute bottom-[2%] font-roboto left-[3%] w-[46%]">
              <Row className="w-[100%]">
                <Img
                  src="images/img_location.svg"
                  className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] mt-[1px] w-[3%]"
                  alt="location"
                />
                <Text className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-bluegray_900 w-[auto]">
                  Số 8A, đường Trần Phú, P. Máy Tơ, Q. Ngô Quyền, TP. Hải Phòng
                </Text>
              </Row>
              <Row className="items-end lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[60%]">
                <Img
                  src="images/img_vector_red_700.svg"
                  className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] mb-[2px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[6%]"
                  alt="Vector Two"
                />
                <Text className="font-normal 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-bluegray_900 w-[auto]">
                  haiphongport@haiphongport.com.vn
                </Text>
              </Row>
            </Column>
            <Img
              src="images/img_bocongthuong.png"
              className="absolute bottom-[0] lg:h-[57px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[88px] right-[2%] w-[16%]"
              alt="bocongthuong"
            />
            <Img
              src="images/img_20150827110756.png"
              className="absolute bottom-[0] lg:h-[57px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[88px] right-[21%] w-[16%]"
              alt="20150827110756"
            />
          </Stack>
          <Column className="absolute bg-white_A700_e5 font-roboto inset-x-[0] items-center justify-end mx-[auto] lg:p-[31px] xl:p-[36px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius16 top-[24%] w-[62%]">
            <Text className="font-medium leading-[normal] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[30px] xl:text-[35px] 2xl:text-[39px] 3xl:text-[47px] text-center text-indigo_500 uppercase w-[77%]">
              hệ thống kiếm soát container ra vào TỰ ĐỘNG
            </Text>
            <Img
              src="images/img_rectangle13936.png"
              className="lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[234px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[42%]"
              alt="Rectangle13936"
            />
            <Row className="justify-between 3xl:mt-[106px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] w-[99%]">
              <Text className="font-medium lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 uppercase w-[auto]">
                TIỆN ÍCH
              </Text>
              <Text className="font-medium mt-[1px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_901 uppercase w-[auto]">
                CẤU HÌNH
              </Text>
            </Row>
          </Column>
        </Stack>
        <Column className="absolute bottom-[12%] left-[30%] w-[21%]">
          <SelectBox
            className="font-light lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[100%]"
            placeholderClassName="text-black_901"
            name="Group27744"
            placeholder="Chọn tiện ích"
            isSearchable={false}
            isMulti={false}
            indicator={
              <Img
                src="images/img_arrowdown.svg"
                className="lg:w-[12px] lg:h-[7px] lg:mr-[14px] xl:w-[13px] xl:h-[8px] xl:mr-[16px] 2xl:w-[15px] 2xl:h-[9px] 2xl:mr-[18px] 3xl:w-[18px] 3xl:h-[11px] 3xl:mr-[21px]"
                alt="arrow_down"
              />
            }
            size="md"
          ></SelectBox>
          <Column className="bg-white_A700 border border-gray_200 border-solid p-[2px] shadow-bs1 w-[100%]">
            <Text className="font-light 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
              Truy vấn thông tin container
            </Text>
            <Line className="bg-gray_201 h-[1px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[96%]" />
            <Input
              className="font-light p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] placeholder:text-black_901 text-black_901 w-[100%]"
              wrapClassName="2xl:ml-[9px] 2xl:mt-[11px] 3xl:ml-[11px] 3xl:mt-[13px] lg:ml-[7px] lg:mt-[8px] w-[96%] xl:ml-[8px] xl:mt-[10px]"
              name="GroupThirtySix"
              placeholder="Truy vấn lệnh giao nhận & in lại"
              size="md"
              variant="UnderLineGray201"
            ></Input>
            <Text className="font-light 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
              Truy vấn điều chỉnh xe/moóc
            </Text>
          </Column>
          <Line className="bg-gray_201 h-[1px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[59%]" />
        </Column>
      </Stack>
    </>
  );
};

export default MnhnhchPage;
