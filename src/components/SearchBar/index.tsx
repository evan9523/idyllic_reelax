import React from "react";
import {
  SearchButton,
  SearchInput,
  SearchLabel,
  SearchWrapper,
} from "./Styles";

interface SearchBarProps {
  onChange(): any;
  onSrBtn(): any;
  onFocus():any
}
const SearchBar = (props: SearchBarProps) => {
  const { onChange, onSrBtn,onFocus } = props;
  return (
    <SearchWrapper>
      <SearchInput placeholder="Search here" onChange={onChange} onFocus={onFocus} />
      <SearchButton onClick={onSrBtn}>
        <SearchLabel>Go</SearchLabel>
      </SearchButton>
    </SearchWrapper>
  );
};

export default SearchBar;
