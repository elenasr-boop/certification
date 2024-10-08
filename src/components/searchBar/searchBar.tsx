import React, { useState } from "react";
import { SearchBarStyled, Input, SearchImg, Label, TossToggleInput, Block } from "./searchBar.styled";
import { getUsers } from "../../api";
import { useAppDispatch } from "../../store/store.ts";
import { setUser } from "../../store/features/usersSlice.ts";

type SearchBarProps = {
  setIsFirstRequest: (value: boolean) => void;
};

export function SearchBar({ setIsFirstRequest }: SearchBarProps) {
  const [request, setRequest] = useState("");
  const dispatch = useAppDispatch();
  const [isIncrease, setIsIncrease] = useState(true);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setRequest(value);
  }

  function search() {
    getUsers(request, isIncrease).then((res) => {
      const resultList = res.data.items.map((el) => {
        return {
          id: el.id,
          login: el.login,
          img: el.avatar_url,
          url: el.html_url,
          score: el.score,
        };
      });

      if (res.links) {
        const links = res.links.split(", ");
        const nextLink = links[0].replace("<", "").replace('>; rel="next"', "");
        const lastLink = links[1].replace("<", "").replace('>; rel="last"', "");
        dispatch(
          setUser({
            users: resultList,
            totalCount: res.data.total_count,
            currentPage: 1,
            nextPage: nextLink,
            lastPage: lastLink,
          })
        );
      } else {
        dispatch(
          setUser({
            users: resultList,
            totalCount: res.total_count,
            currentPage: 1,
          })
        );
      }

      setIsFirstRequest(false);
    });
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      search();
    }
  }

  return (
    <Block>
      <SearchBarStyled>
      <Input
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
        placeholder="Введите логин"
        type="text"
      />
      <SearchImg src="../search.svg" alt="Поиск" onClick={() => search()} />
    </SearchBarStyled>
    <Label htmlFor="toss-toggle">
    <TossToggleInput
      id="toss-toggle"
      type="checkbox"
      name="toss_toggle"
      checked={isIncrease}
      onChange={(e) => setIsIncrease(e.target.checked)}
    />
    {isIncrease ? "Возрастание репозиториев" : "Убывание репозиториев"}
  </Label>
    </Block>
  );
}
