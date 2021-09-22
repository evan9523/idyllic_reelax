import React from "react";
import { BtnContainer, BtnTitle } from "./Styles";

interface ButtonProps {
  title: string;
  onPress(): any;
}
const Button = (props: ButtonProps) => {
  const { title, onPress } = props;
  return (
    <BtnContainer onClick={onPress}>
      <BtnTitle>{title}</BtnTitle>
    </BtnContainer>
  );
};

export default Button;
