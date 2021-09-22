import React from "react";
import Button from "../Button";
import Logo from "../Logo";
import { HeaderContainer } from "./Styles";
import { useHistory } from "react-router-dom";
import staticimg from "../../assets/static.svg";

const Header = () => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <img
        src={staticimg}
        alt="logo"
        style={{
          height: 40,
          width: 40,
        }}
      />
      <Button
        title="LogOut"
        onPress={() => {
          localStorage.removeItem("user");
          history.push("/");
        }}
      />
    </HeaderContainer>
  );
};

export default Header;
