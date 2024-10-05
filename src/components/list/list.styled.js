import styled from "styled-components";

export const ListStyled = styled.div`
    font-size: 30px;
    overflow-y: auto;
    color: #f2f2f2;

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