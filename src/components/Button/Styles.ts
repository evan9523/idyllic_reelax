import styled from "styled-components";

export const BtnContainer = styled.button`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #58e2c9;
  border: 1px solid #58e2c9;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;

  @media only screen and (max-width: 800px) {
    width: 100px;
  }
`;

export const BtnTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
