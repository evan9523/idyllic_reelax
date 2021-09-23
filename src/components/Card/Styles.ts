import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;
  background: radial-gradient(#111 50%, #000 100%);
  margin: 20px;
  border:3px solid #33cccc ;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 20px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.1 ease-in;
    z-index: 999;
  }
  @media only screen and (max-width: 800px) {
    width: 35%;
    
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
  max-width: 100%;
  display: block;
  transform: scale(1.3);
  transition: all 0.3 ease-out;
  &:hover {
    transform: scale(1.1) translateY(-20px);
    opacity: 0.3;
  }
`;

export const CardHeaderWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 90%;
  padding: 10px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  word-wrap: break-word;
`;
