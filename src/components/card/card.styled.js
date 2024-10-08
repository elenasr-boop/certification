import styled from "styled-components";

export const CardStyled = styled.div`
  position: absolute;
  z-index: 1;
  background-color: #1f1f1e;
  border: solid 3px #5e0194;
  border-radius: 30px;
  padding: 30px;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 15px;
  row-gap: 15px;
  grid-template-areas:
    "img login"
    "img score"
    "url url";
`;

export const Login = styled.p`
  grid-area: login;
  word-break: break-all;
  margin: 0;
`;

export const Img = styled.img`
  grid-area: img;
  width: 100%;
  min-width: 50px;
  border-radius: 50%;
`;

export const Url = styled.a`
  grid-area: url;
  text-decoration: none;
  color: #5e0194;
  word-break: break-all;
`;

export const Score = styled.p`
  grid-area: score;
  margin: 0;
`;
