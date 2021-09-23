import styled from "styled-components";

export const DetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: linear-gradient(#03173e, #000);
  align-items: center;
  justify-content: center;
`;

export const DetailCard = styled.div`
  width: 60%;
  height: 60%;
  background-color: #000;
  border: 3px solid #03173e;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;

export const Section = styled.div`
  width: 75%;
  height: 33%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const CoverImg = styled.img`
  width: 40%;
  height: 150px;
  border: 3px solid #33ccff;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
`;

export const StatContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const StatWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LabelHead = styled.span`
  font-size: 16px;
  color: gray;
  margin: 10px;
  font-weight: bold;
`;

export const MoreContainer = styled.div`
  width: 85%;
  height: 30%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: center;
`;

export const Stat = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const Plot = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const MovieTitle = styled.span`
  font-size: 30px;
  color: #fff;
  font-weight: light;
`;
