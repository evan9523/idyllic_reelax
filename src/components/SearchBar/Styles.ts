import styled from "styled-components";

export const SearchWrapper = styled.div`
  width: 60%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  width: 30%;
  height: 95%;
  border: 2px solid #58e2c9;
  outline-color:none;
  border-bottom-left-radius: 20px;
  text-align: left;
  margin-top: 2px;
  padding: 10px;
  font-size: 20px;
  background-color: #fff;
  color: #5c5c5c;
  outline-color: none !important;
  border-right-color: #fff;
`;

export const SearchButton = styled.button`
  width: 80px;
  height: 50px;
  border: 0.5px solid #00cc99;
  margin-bottom: -2px;
  background-color: #00cc99;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ClrBtn = styled.button`
  width: 80px;
  height: 52px;
  border: 2px solid #58e2c9;
  margin-bottom: -2px;
  background-color: #fff;
  border-top-right-radius: 20px;
  border-left-color: #fff;
 
`;

export const SearchLabel = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;


