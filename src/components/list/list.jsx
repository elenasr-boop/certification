import React, { useState } from "react";
import { ListEl, ListStyled } from "./list.styled";
import { useAppSelector } from "../../store/store.ts";
import { Card } from "../card/card.tsx";

export function List() {
  const usersList = useAppSelector((state) => state.users.users);
  const [CardOpen, setCardOpen] = useState(null);

  if (usersList.length === 0) {
    return <div>Таких результатов нет, попробуйте другой логин</div>;
  } else {
    return (
      <ListStyled>
        {usersList.map((el) => {
          return <ListEl key={el.id} onClick={() => setCardOpen(el.id)} >
            {el.login}
            {CardOpen === el.id && <Card el={el} />}
          </ListEl>;
        })}
      </ListStyled>
    );
  }
}
