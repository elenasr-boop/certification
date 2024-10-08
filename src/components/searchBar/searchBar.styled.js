import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;
`;

export const SearchBarStyled = styled.div`
  background-color: #f2f2f2;
  height: 40px;
  width: calc(100% - 30px);
  border-radius: 40px;
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

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  gap: 15px;
  font-size: 17px;
`;

export const TossToggleInput = styled.input`
  width: 15px;
`;
