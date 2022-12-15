import React from "react";
import styled from "./CustomButton.module.css";

const CustomButton = ({
  BtnText,
  colorScheme,
  textColor,
  width,
  height,
  fontSize,
  variant,
  Type,
}) => {
  return (
    <button
      type={Type}
      className={`${styled[variant]} ${styled[fontSize]} ${styled[colorScheme]} ${styled[textColor]} ${styled[width]} ${styled[height]}`}
    >
      {BtnText}
    </button>
  );
};

export default CustomButton;
