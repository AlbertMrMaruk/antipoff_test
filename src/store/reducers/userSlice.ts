import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserListResponse, UserType } from "../../api/UsersAPI.types";

interface UserState {
  users: UserType[] | [];
  currentPage: number;
  totalPages: number;
  likedUsers: number[];
  currentUser: UserType | null;
}

const initialState: UserState = {
  currentPage: 1,
  totalPages: 1,
  currentUser: null,
  users: [],
  likedUsers: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLikedUsers: (state) => {
      state.likedUsers = JSON.parse(localStorage.getItem("likedUsers") ?? "[]");
    },
    toggleLikeUser: (state, action: PayloadAction<number>) => {
      const userIndex = state.likedUsers.findIndex(
        (el) => el === action.payload
      );

      if (userIndex !== -1) {
        state.likedUsers.splice(userIndex, 1);
      } else {
        state.likedUsers.push(action.payload);
      }
      localStorage.setItem("likedUsers", JSON.stringify(state.likedUsers));
    },
    setUsersList: (state, action: PayloadAction<UserListResponse>) => {
      state.users = action.payload.data;
      state.currentPage = 1;
      state.currentUser = null;
      state.totalPages = action.payload.total_pages;
    },
    addUsers(state, action: PayloadAction<UserType[]>) {
      state.currentPage += 1;
      state.users = [...state.users, ...action.payload];
    },
    setCurrentUser(state, action: PayloadAction<UserType>) {
      state.currentUser = action.payload;
    },
  },
});

export const {
  toggleLikeUser,
  setUsersList,
  addUsers,
  setCurrentUser,
  setLikedUsers,
} = userSlice.actions;

export default userSlice.reducer;
