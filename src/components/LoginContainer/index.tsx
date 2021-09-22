import React, { useEffect, useState } from "react";
import {
  Container,
  ErrorText,
  FormWrapper,
  Heading,
  ImageContainer,
  LoginImg,
  StyledInput,
} from "./Styles";
import login from "../../assets/loginImg.png";
import Logo from "../Logo";
import Button from "../Button";
import { useHistory } from "react-router-dom";

const LoginContainer = () => {
  const [user, setUser] = useState("");
  const [error, seterror] = useState("");
  const [users, setusers] = useState<any[]>([]);
  const [name, setname] = useState("");
  const history = useHistory();

  useEffect(() => {
    var session = localStorage.getItem("user");
    console.log(session);
    if (session !== null) {
      history.push("/welcome");
    }
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setusers(json));
  }, []);

  const handleLogin = () => {
    console.log(users);
    const matchUser = users.filter((item) => {
      if (item.username.toLocaleLowerCase().includes(user.toLowerCase())) {
        return item.name;
      } else {
        seterror("Please recheck username");
      }
    });
    matchUser.map((i) => {
      i.name !== null ? setname(i.name) : setname("");
    });
  };

  useEffect(() => {
    if (name !== "") {
      localStorage.setItem("user", name);
      history.push({
        pathname: "/welcome",
      });
    }
  }, [name]);

  return (
    <Container>
      <FormWrapper>
        <Logo />
        <Heading>Sign in to your account</Heading>
        <StyledInput
          placeholder="Enter your username"
          onChange={(e) => setUser(e.target.value)}
        />
        <ErrorText>{error ? error : null}</ErrorText>
        <Button title="Login" onPress={() => handleLogin()} />
      </FormWrapper>
      <ImageContainer>
        <LoginImg src={login} alt="Reelax" />
      </ImageContainer>
    </Container>
  );
};

export default LoginContainer;
