import styled from "styled-components";

export const SearchBarStyled = styled.div`
  background-color: #f2f2f2;
  height: 40px;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border: solid 3px #5e0194;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  background-color: #f2f2f2;
  border: none;
  width: calc(100% - 70px);
  height: 37px;
  font-size: 30px;
  color: #1f1f1e;

  &:focus-visible {
    outline: none;
  }
`;

export const SearchImg = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
