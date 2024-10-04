import React, { useState } from "react";
import { SearchBarStyled, Input, SearchImg } from "./searchBar.styled";
import { getUsers } from "../../api";

type SearchBarProps = {
  setIsFirstRequest: (value: boolean) => void;
}

export function SearchBar({ setIsFirstRequest } : SearchBarProps) {
  const [request, setRequest] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setRequest(value);
  }

  function search() {
    console.log(request);
    getUsers(request);
    setIsFirstRequest(false);
  }

  function handleKeyPress (e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      search();
    }
  }

  return (
    <SearchBarStyled>
      <Input
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
        placeholder="Введите запрос"
        type="text"
      />
      <SearchImg
        src="../search.svg"
        alt="Поиск"
        onClick={() => search()}
      />
    </SearchBarStyled>
  );
}
