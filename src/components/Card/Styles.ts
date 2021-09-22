import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 250px;
  height: 40%;
  background-image: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;

  @media only screen and (max-width: 800px) {
    width: 40%;
  }
`;
export const CardHeader = styled.span`
  font-size: 18px;
  color: #fff;
`;

export const YearLabel = styled.span`
  font-size: 14px;
  color: #fff;
`;

export const CardImg = styled.img`
  width: 95%;
  height: 95%;
`;
