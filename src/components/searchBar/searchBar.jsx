import React from "react";
import { SearchBarStyled, Input, SearchImg } from "./searchBar.styled";

export function SearchBar() {
  return (
    <SearchBarStyled>
      <Input />
      <SearchImg src="../search.svg" alt="Поиск" />
    </SearchBarStyled>
  );
}
