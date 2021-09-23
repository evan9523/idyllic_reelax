import React from "react";
import {
  ClrBtn,
  SearchButton,
  SearchInput,
  SearchLabel,
  SearchWrapper,
} from "./Styles";
import { AiFillCloseCircle } from "react-icons/ai";

interface SearchBarProps {
  onChange(): any;
  onSrBtn(): any;
  onFocus(): any;
  onClear(): any;
  showClr?: boolean;
  value?: string;
}
const SearchBar = (props: SearchBarProps) => {
  const { onChange, onSrBtn, onFocus, onClear, showClr, value } = props;
  return (
    <SearchWrapper>
      <SearchInput
        placeholder="Search here"
        onChange={onChange}
        onFocus={onFocus}
        value={value}
      />
      {showClr ? (
        <ClrBtn onClick={onClear}>
          <AiFillCloseCircle size={30} />
        </ClrBtn>
      ) : null}
      <SearchButton onClick={onSrBtn}>
        <SearchLabel>Go</SearchLabel>
      </SearchButton>
    </SearchWrapper>
  );
};

export default SearchBar;
