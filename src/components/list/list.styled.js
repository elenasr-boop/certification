import styled from "styled-components";

export const ListStyled = styled.div`
  font-size: 30px;
  overflow-y: auto;
  color: #f2f2f2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 816px) {
    display: flex;
    flex-direction: column;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background: #f2f2f2;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #5e0194;
    border-radius: 10px;
  }
`;

export const ListEl = styled.div`
  height: 50px;
  border: solid 3px #5e0194;
  border-radius: 20px;
  margin-right: 35px;
  padding-left: 15px;
  box-sizing: border-box;
  position: relative;
`;
