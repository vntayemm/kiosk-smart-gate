import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  RoundedBorder4: "rounded-radius4",
  RoundedBorder12: "rounded-radius128",
  icbRoundedBorder1: "rounded-radius1",
};
const variants = {
  OutlineIndigo500: "border border-indigo_500 border-solid text-indigo_500",
  OutlineWhiteA700:
    "bg-indigo_500 border border-solid border-white_A700 text-white_A700",
  FillIndigo500: "bg-indigo_500 text-white_A700",
  OutlineIndigo5001_2:
    "bg-white_A700 border border-indigo_500 border-solid text-indigo_500",
  FillRed400: "bg-red_400 text-white_A700",
  OutlineWhiteA7001_2:
    "bg-indigo_500 border-bw128 border-solid border-white_A700 text-white_A700",
  icbFillLightblue800: "bg-light_blue_800",
};
const sizes = {
  sm: "p-[17px] lg:p-[18px] xl:p-[21px] 2xl:p-[23px] 3xl:p-[28px]",
  md: "p-[20px] lg:p-[21px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[33px]",
  smIcn: "p-[2px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder10",
    "RoundedBorder4",
    "RoundedBorder12",
    "icbRoundedBorder1",
  ]),
  variant: PropTypes.oneOf([
    "OutlineIndigo500",
    "OutlineWhiteA700",
    "FillIndigo500",
    "OutlineIndigo5001_2",
    "FillRed400",
    "OutlineWhiteA7001_2",
    "icbFillLightblue800",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "OutlineIndigo500",
  size: "sm",
};

export { Button };
