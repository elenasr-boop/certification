import React from "react";
import { Container } from "./main.styled";
import { SearchBar } from "../searchBar/searchBar";
import { List } from "../list/list";

export function Main () {
    return (
        <Container>
            <SearchBar />
            <List />
        </Container>
    )
}