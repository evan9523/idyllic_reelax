import React from "react";
import { LogoContainer } from "../LoginContainer/Styles";
import { LogoImg, LogoText } from "./Styles";
import logo from "../../assets/grp2.svg";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={logo} />
      <LogoText>Welcome 🙏 Lets search movies </LogoText>
    </LogoContainer>
  );
};

export default Logo;
