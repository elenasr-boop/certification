import React, { useState } from "react";
import { Container } from "./main.styled";
import { SearchBar } from "../searchBar/searchBar.tsx";
import { List } from "../list/list";

export function Main () {
    const [isFirstRequest, setIsFirstRequest] = useState(true);

    return (
        <Container $isFirst={`${isFirstRequest}`}>
            <SearchBar setIsFirstRequest={setIsFirstRequest} />
            {isFirstRequest}
            {!isFirstRequest && <List />}
        </Container>
    )
}