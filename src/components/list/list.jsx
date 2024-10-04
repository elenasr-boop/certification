import React from "react";
import { ListStyled } from "./list.styled";
import { useAppSelector } from "../../store/store.ts";

export function List() {
    const usersList = useAppSelector((state) => state.users);
  console.log("list in component", usersList);

  if (!usersList[0]) {
    return <div>Loading...</div>;
  } else {
    return (
      <ListStyled>
        {usersList.map((el) => {
          console.log(el);
          return <div key={el.id}>{el.login}</div>;
        })}
      </ListStyled>
    );
  }
}
