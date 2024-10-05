import React from "react";
import { ListStyled } from "./list.styled";
import { useAppSelector } from "../../store/store.ts";

export function List() {
  const usersList = useAppSelector((state) => state.users.users);

  if (usersList.length === 0) {
    return <div>Таких результатов нет, попробуйте другой логин</div>;
  } else {
    return (
      <ListStyled>
        {usersList.map((el) => {
          return <div key={el.id}>{el.name} {el.login} {el.repos} </div>;
        })}
      </ListStyled>
    );
  }
}
