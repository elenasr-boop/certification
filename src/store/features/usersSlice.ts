import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userType = {
  id: string;
  name: string;
  login: string;
  img: string;
  url: string;
  score: number;
  repos: number;
};

type userState = {
  users: userType[];
  totalCount: number;
  currentPage: number;
  nextPage?: string,
  prevPage?: string;
  lastPage?: string,
  firstPage?: string,
};

const initialState: userState = {
  users: [],
  totalCount: 0,
  currentPage: 1,
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userState>) => {
      return action.payload;
    },
  },
});

export const { setUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
