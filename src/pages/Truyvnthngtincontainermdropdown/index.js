import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Input,
  SelectBox,
  Line,
  List,
} from "components";

const TruyvnthngtincontainermdropdownPage = () => {
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
        <Column className="bg-white_A700_e5 items-center 3xl:mt-[101px] lg:mt-[65px] xl:mt-[75px] 2xl:mt-[84px] lg:p-[38px] xl:p-[43px] 2xl:p-[49px] 3xl:p-[59px] rounded-radius16 w-[73%]">
          <Stack className="lg:h-[354px] xl:h-[405px] 2xl:h-[455px] 3xl:h-[546px] w-[96%]">
            <Column className="absolute items-center top-[0] w-[100%]">
              <Text className="font-semibold lg:text-[26px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px] text-indigo_500 w-[auto]">
                TRUY VẤN THÔNG TIN CONTAINER
              </Text>
              <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[100%]">
                <Input
                  className="font-normal not-italic p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                  wrapClassName="mt-[1px] w-[29%]"
                  name="Username"
                  placeholder="Tìm theo số container ..."
                  shape="RoundedBorder10"
                  size="sm"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                  wrapClassName="2xl:ml-[22px] 3xl:ml-[27px] lg:ml-[17px] mt-[1px] w-[29%] xl:ml-[20px]"
                  name="Username One"
                  placeholder="Tìm theo SĐT"
                  shape="RoundedBorder10"
                  size="sm"
                ></Input>
                <Stack className="bg-red_700 lg:h-[57px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[88px] mb-[1px] lg:ml-[216px] xl:ml-[247px] 2xl:ml-[278px] 3xl:ml-[334px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius10 w-[9%]">
                  <Img
                    src="images/img_search.svg"
                    className="absolute lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] inset-[0] justify-center m-[auto] lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                    alt="search"
                  />
                </Stack>
              </Row>
            </Column>
            <Stack className="absolute bottom-[0] lg:h-[309px] xl:h-[353px] 2xl:h-[397px] 3xl:h-[477px] inset-x-[0] mx-[auto] w-[99%]">
              <Row className="absolute bg-white_A700 border border-gray_100 border-solid bottom-[0] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[32px] rounded-radius6 w-[100%]">
                <Column className="lg:ml-[44px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[77%]">
                  <Text className="font-normal not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                      Số lệnh
                    </span>
                    <span className="text-black_901 font-roboto font-light">
                      :
                    </span>
                    <span className="text-black_901 font-roboto">
                      {" "}
                      E2231110022
                    </span>
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                      Hạn lệnh
                    </span>
                    <span className="text-black_901 font-roboto font-light">
                      :
                    </span>
                    <span className="text-black_901 font-roboto">
                      {" "}
                      13/03/2022 23:58:59
                    </span>
                  </Text>
                  <Text className="font-normal lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                      Tác nghiệp
                    </span>
                    <span className="text-black_901 font-roboto font-light">
                      :
                    </span>
                    <span className="text-black_901 font-roboto">
                      {" "}
                      Lấy nguyên
                    </span>
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                      Số container
                    </span>
                    <span className="text-black_901 font-roboto font-light">
                      :
                    </span>
                    <span className="text-black_901 font-roboto"> </span>
                    <span className="text-black_901 font-roboto">
                      MRSUS098529
                    </span>
                  </Text>
                  <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                      Số điện thoại
                    </span>
                    <span className="text-black_901 font-roboto font-light">
                      :
                    </span>
                    <span className="text-black_901 font-roboto"> </span>
                    <span className="text-black_901 font-roboto">
                      09852946890
                    </span>
                  </Text>
                  <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                    <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                      Trạng thái
                    </span>
                    <span className="text-black_901 font-roboto font-light">
                      :
                    </span>
                    <span className="text-black_901 font-roboto"> </span>
                    <span className="text-orange_300 font-roboto">
                      Đang chờ
                    </span>
                  </Text>
                </Column>
                <Img
                  src="images/img_image4.png"
                  className="lg:h-[40px] xl:h-[46px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[48px] xl:mt-[55px] 2xl:mt-[61px] 3xl:mt-[74px] lg:w-[39px] xl:w-[45px] 2xl:w-[50px] 3xl:w-[60px]"
                  alt="imageFour"
                />
              </Row>
              <Column className="absolute right-[10%] top-[0] w-[26%]">
                <SelectBox
                  className="font-light lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[100%]"
                  placeholderClassName="text-black_901"
                  name="Group27744"
                  placeholder="Chọn tác nghiệp"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="lg:w-[15px] lg:h-[9px] lg:mr-[16px] xl:w-[17px] xl:h-[11px] xl:mr-[18px] 2xl:w-[19px] 2xl:h-[12px] 2xl:mr-[21px] 3xl:w-[23px] 3xl:h-[14px] 3xl:mr-[25px]"
                      alt="arrow_down"
                    />
                  }
                  size="xl"
                ></SelectBox>
                <Column className="bg-white_A700 border border-gray_200 border-solid mt-[1px] p-[1px] shadow-bs1 w-[100%]">
                  <Text className="font-light 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                    Tất cả
                  </Text>
                  <Line className="bg-gray_201 h-[1px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[21px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] w-[95%]" />
                  <Text className="font-light 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                    Lấy nguyên
                  </Text>
                  <Line className="bg-gray_201 h-[1px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[95%]" />
                  <Text className="font-light lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                    Hạ bãi
                  </Text>
                </Column>
                <Line className="bg-gray_201 h-[1px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[59%]" />
              </Column>
            </Stack>
          </Stack>
          <List
            className="gap-[0] mb-[2px] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[96%]"
            orientation="vertical"
          >
            <Row className="bg-white_A700 border border-gray_100 border-solid xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[32px] rounded-radius6 w-[100%]">
              <Column className="lg:ml-[44px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[77%]">
                <Text className="font-normal not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                    Số lệnh
                  </span>
                  <span className="text-black_901 font-roboto font-light">
                    :
                  </span>
                  <span className="text-black_901 font-roboto">
                    {" "}
                    E2231110022
                  </span>
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                    Hạn lệnh
                  </span>
                  <span className="text-black_901 font-roboto font-light">
                    :
                  </span>
                  <span className="text-black_901 font-roboto">
                    {" "}
                    13/03/2022 23:58:59
                  </span>
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                    Tác nghiệp
                  </span>
                  <span className="text-black_901 font-roboto font-light">
                    :
                  </span>
                  <span className="text-black_901 font-roboto">
                    {" "}
                    Lấy nguyên
                  </span>
                </Text>
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                    Số container
                  </span>
                  <span className="text-black_901 font-roboto font-light">
                    :
                  </span>
                  <span className="text-black_901 font-roboto"> </span>
                  <span className="text-black_901 font-roboto">
                    MRSUS098529
                  </span>
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                    Số điện thoại
                  </span>
                  <span className="text-black_901 font-roboto font-light">
                    :
                  </span>
                  <span className="text-black_901 font-roboto"> </span>
                  <span className="text-black_901 font-roboto">
                    09852946890
                  </span>
                </Text>
                <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                    Trạng thái
                  </span>
                  <span className="text-black_901 font-roboto font-light">
                    :
                  </span>
                  <span className="text-black_901 font-roboto"> </span>
                  <span className="text-orange_300 font-roboto">Đang chờ</span>
                </Text>
              </Column>
              <Img
                src="images/img_image4.png"
                className="lg:h-[40px] xl:h-[46px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[48px] xl:mt-[55px] 2xl:mt-[61px] 3xl:mt-[74px] lg:w-[39px] xl:w-[45px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="imageFour One"
              />
            </Row>
            <Row className="bg-white_A700 border border-gray_100 border-solid xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[32px] rounded-radius6 w-[100%]">
              <Column className="lg:ml-[44px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[77%]">
                <Text className="font-normal not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                    Số lệnh
                  </span>
                  <span className="text-black_901 font-roboto font-light">
                    :
                  </span>
                  <span className="text-black_901 font-roboto">
                    {" "}
                    E2231110022
                  </span>
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                    Hạn lệnh
                  </span>
                  <span className="text-black_901 font-roboto font-light">
                    :
                  </span>
                  <span className="text-black_901 font-roboto">
                    {" "}
                    13/03/2022 23:58:59
                  </span>
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                    Tác nghiệp
                  </span>
                  <span className="text-black_901 font-roboto font-light">
                    :
                  </span>
                  <span className="text-black_901 font-roboto">
                    {" "}
                    Lấy nguyên
                  </span>
                </Text>
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                    Số container
                  </span>
                  <span className="text-black_901 font-roboto font-light">
                    :
                  </span>
                  <span className="text-black_901 font-roboto"> </span>
                  <span className="text-black_901 font-roboto">
                    MRSUS098529
                  </span>
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                    Số điện thoại
                  </span>
                  <span className="text-black_901 font-roboto font-light">
                    :
                  </span>
                  <span className="text-black_901 font-roboto"> </span>
                  <span className="text-black_901 font-roboto">
                    09852946890
                  </span>
                </Text>
                <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-black_901 w-[auto]">
                  <span className="text-black_901 font-roboto font-light lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
                    Trạng thái
                  </span>
                  <span className="text-black_901 font-roboto font-light">
                    :
                  </span>
                  <span className="text-black_901 font-roboto"> </span>
                  <span className="text-orange_300 font-roboto">Đang chờ</span>
                </Text>
              </Column>
              <Img
                src="images/img_image4.png"
                className="lg:h-[40px] xl:h-[46px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[48px] xl:mt-[55px] 2xl:mt-[61px] 3xl:mt-[74px] lg:w-[39px] xl:w-[45px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="imageFour Two"
              />
            </Row>
          </List>
        </Column>
      </Column>
    </>
  );
};

export default TruyvnthngtincontainermdropdownPage;
