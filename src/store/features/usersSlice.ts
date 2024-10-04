import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userType = {
  id: string;
  login: string;
  img: string;
  url: string;
  score: number;
};

const initialState: userType[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userType[]>) => {
      return action.payload;
    },
  },
});

export const { setUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
