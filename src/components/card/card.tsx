import React from "react";
import { CardStyled, Img, Login, Score, Url } from "./card.styled";

type elType = {
  id: string;
  login: string;
  img: string;
  url: string;
  score: number;
};

export function Card({ el }: { el: elType }) {
  return (
    <CardStyled>
      <Login>{el.login}</Login>
      <Img src={el.img} />
      <Score>Счёт: {el.score}</Score>
      <Url href={el.url} target="_blank">
        {el.url}
      </Url>
    </CardStyled>
  );
}
