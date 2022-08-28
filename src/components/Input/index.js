import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillWhiteA700: "bg-white_A700",
  UnderLineGray201: "border-b-[1px] border-gray_201",
};
const shapes = { RoundedBorder10: "rounded-radius10" };
const sizes = {
  sm: "px-[17px] lg:px-[18px] xl:px-[21px] 2xl:px-[23px] 3xl:px-[28px] py-[18px] lg:py-[19px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px]",
  md: "pb-[10px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[16px]",
  lg: "pb-[13px] lg:pb-[14px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf(["FillWhiteA700", "UnderLineGray201"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "FillWhiteA700",
  size: "",
};

export { Input };
