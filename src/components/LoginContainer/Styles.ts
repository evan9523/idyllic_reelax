import styled from "styled-components";

    export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color:#fff;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        justify-content: space-evenly;
    }
    `;

export const FormWrapper = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 50%;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: #000f30;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  @media only screen and (max-width: 800px) {
    background-color: #000f30;
    width: 100%;
    height: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export const LoginImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;

  @media only screen and (max-width: 800px) {
    background-color: red;
    width: 90%;
    height: 100%;
  }
`;

export const LogoContainer = styled.div`
  width: 70%;
  height: 100px;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  width: 60%;
  height: 40px;
  border: 1px solid #123ce3;
  text-align: center;
  outline-color: transparent;
  font-size: 15px;
  border-bottom-right-radius: 60px;
  border-top-left-radius: 60px;
`;

export const Heading = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #335bff;
`;

export const ErrorText = styled.span`
color:red;
font-size: 15px;
`
