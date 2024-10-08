import React from "react"
import { Button, PaginationStyled } from "./pagination.styled"
import { useAppSelector } from "../../store/store.ts"

export function Pagination () {
    const totalCount = useAppSelector(state => state.users.totalCount);
    const currenPage = useAppSelector(state => state.users.currentPage);

    return (
        <PaginationStyled>
            <Button><img width="30" height="30" src="https://img.icons8.com/nolan/30/rewind.png" />В начало</Button>
            <Button><img width="30" height="30" src="https://img.icons8.com/nolan/30/1A6DFF/C822FF/sort-left--v1.png" />Предыдущая</Button>
            Страница {currenPage} из {Math.floor(totalCount/30) + 1}
            <Button><img width="30" height="30" src="https://img.icons8.com/nolan/30/play.png" />Следующая</Button>
            <Button><img width="30" height="30" src="https://img.icons8.com/nolan/30/fast-forward.png" />В конец</Button>
        </PaginationStyled>
    )
}