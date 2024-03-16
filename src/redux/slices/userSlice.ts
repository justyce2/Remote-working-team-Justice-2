import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "../store/settings";

const userPersistConfig = {
  key: "user",
  storage: storage,
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.user.token = action.payload;
    },
    clearToken: (state) => {
      state = null;
      return state;
    },
    resetUser(state) {
      state.user = null;
    },
  },
});

export const { resetUser, clearToken, setUser, setToken } = userSlice.actions;
export const selectUser = (state) => state.user;

export const userPersistedReducer = persistReducer(
  userPersistConfig,
  userSlice.reducer
);
