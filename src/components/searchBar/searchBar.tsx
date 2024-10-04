import React, { useState } from "react";
import { SearchBarStyled, Input, SearchImg } from "./searchBar.styled";
import { getUsers } from "../../api";
import { useAppDispatch } from "../../store/store.ts";
import { setUser } from "../../store/features/usersSlice.ts";

type SearchBarProps = {
  setIsFirstRequest: (value: boolean) => void;
};

export function SearchBar({ setIsFirstRequest }: SearchBarProps) {
  const [request, setRequest] = useState("");
  const dispatch = useAppDispatch();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setRequest(value);
  }

  function search() {
    getUsers(request).then((res) => {
      const resultList = res.map((el) => ({
        id: el.id,
        login: el.login,
        img: el.avatar_url,
        url: el.html_url,
        score: el.score,
      }));
      dispatch(setUser(resultList));
      
    setIsFirstRequest(false);
    });
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
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
      <SearchImg src="../search.svg" alt="Поиск" onClick={() => search()} />
    </SearchBarStyled>
  );
}
