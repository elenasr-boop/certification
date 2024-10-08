import React, { useState } from "react";
import { Container } from "./main.styled";
import { SearchBar } from "../searchBar/searchBar.tsx";
import { List } from "../list/list";
import { useAppSelector } from "../../store/store.ts";
import { Pagination } from "../pagination/pagination.jsx";

export function Main () {
    const [isFirstRequest, setIsFirstRequest] = useState(true);
    const users = useAppSelector((state) => state.users.users);

    return (
        <Container $isFirst={`${isFirstRequest}`}>
            <SearchBar setIsFirstRequest={setIsFirstRequest} />
            {isFirstRequest}
            {!isFirstRequest && <List />}
            {users.length >= 30 && <Pagination/>}
        </Container>
    )
}