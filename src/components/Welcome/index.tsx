//@ts-nocheck


import React, { useEffect, useRef, useState } from "react";
import { UserLabel, WelcomeContainer, Wrapper } from "./Styles";
import { useHistory } from "react-router-dom";
import Lottie from "lottie-web";

const Welcome = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/movie");
    }, 4000);
  });
  const container = useRef(null);
  const [user, setuser] = useState("") ;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setuser(storedUser);
  }, [user]);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",

      loop: true,
      autoplay: true,
      animationData: require("../../assets/hi.json"),
    });
  }, []);
  return (
    <WelcomeContainer>
      <Wrapper className="container" ref={container} />
      <UserLabel>{user}</UserLabel>
    </WelcomeContainer>
  );
};

export default Welcome;
