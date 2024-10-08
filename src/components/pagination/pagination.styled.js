import styled from "styled-components";

export const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  font-size: 16px;
  align-items: center;

  @media (max-width: 563px) {
    gap: 10px;
  }
`;

export const Button = styled.button`
  background-color: #1f1f1e;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #f2f2f2;
  font-size: 16px;
`;

export const Img = styled.img`
width: 30px;

@media (max-width: 563px) {
  width: 15px;
}
`;

export const Span = styled.span`
@media (max-width: 563px) {
  display: none;
}
`;
