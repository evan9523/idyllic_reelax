import styled from "styled-components";

export const MovieContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: linear-gradient(#03173e, #000);
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  padding: 10px;
`;

export const TextLabel = styled.span`
  font-size: 20px;
  color: #fff;
  text-align: center;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: green;
`;

export const HomeTitle = styled.span`
  font-size: 15px;
  color: #fff;
`;
