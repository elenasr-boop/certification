import React from "react"
import { Button, PaginationStyled } from "./pagination.styled";
import { useAppDispatch, useAppSelector } from "../../store/store.ts";
import { changePage } from "../../api.js";
import { setUser } from "../../store/features/usersSlice.ts";

export function Pagination() {
  const totalCount = useAppSelector((state) => state.users.totalCount);
  const currenPage = useAppSelector((state) => state.users.currentPage);
  const firstPage = useAppSelector((state) => state.users.firstPage);
  const lastPage = useAppSelector((state) => state.users.lastPage);
  const nextPage = useAppSelector((state) => state.users.nextPage);
  const prevPage = useAppSelector((state) => state.users.prevPage);
  const dispatch = useAppDispatch();

  function onPageButton(link, page) {
    changePage(link).then((res) => {
      let nextLink = "";
      let lastLink = "";
      let prevLink = "";
      let firstLink = "";
      const links = res.links.split(", ");
      console.log("links: ", links);
      const resultList = res.data.items.map((el) => {
        return {
          id: el.id,
          login: el.login,
          img: el.avatar_url,
          url: el.html_url,
          score: el.score,
        };
      });
      if (links.length > 2) {
        nextLink = links[1].replace("<", "").replace('>; rel="next"', "");
        lastLink = links[2].replace("<", "").replace('>; rel="last"', "");
        prevLink = links[0].replace("<", "").replace('>; rel="prev"', "");
        firstLink = links[3].replace("<", "").replace('>; rel="first"', "");
        dispatch(
            setUser({
              users: resultList,
              totalCount: res.data.total_count,
              currentPage: page,
              nextPage: nextLink,
              lastPage: lastLink,
              prevPage: prevLink,
              firstPage: firstLink,
            })
          );
      } else if (page === 1) {
        nextLink = links[0].replace("<", "").replace('>; rel="next"', "");
        lastLink = links[1].replace("<", "").replace('>; rel="last"', "");
        dispatch(
            setUser({
              users: resultList,
              totalCount: res.data.total_count,
              currentPage: page,
              nextPage: nextLink,
              lastPage: lastLink,
            })
          );
      } else {
        prevLink = links[0].replace("<", "").replace('>; rel="prev"', "");
        firstLink = links[1].replace("<", "").replace('>; rel="first"', "");
        dispatch(
            setUser({
              users: resultList,
              totalCount: res.data.total_count,
              currentPage: page,
              prevPage: prevLink,
              firstPage: firstLink,
            })
          );
      }
    });
  }

  return (
    <PaginationStyled>
      {firstPage && (
        <Button onClick={() => onPageButton(firstPage, 1)}>
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/nolan/30/rewind.png"
          />
          В начало
        </Button>
      )}
      {prevPage && (
        <Button onClick={() => onPageButton(prevPage, currenPage - 1)}>
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/nolan/30/1A6DFF/C822FF/sort-left--v1.png"
          />
          Предыдущая
        </Button>
      )}
      Страница {currenPage} из {Math.floor(totalCount / 50) + 1}
      {nextPage && (
        <Button onClick={() => onPageButton(nextPage, currenPage + 1)}>
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/nolan/30/play.png"
          />
          Следующая
        </Button>
      )}
      {lastPage && (
        <Button
          onClick={() =>
            onPageButton(lastPage, Math.floor(totalCount / 50) + 1)
          }
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/nolan/30/fast-forward.png"
          />
          В конец
        </Button>
      )}
    </PaginationStyled>
  );
}