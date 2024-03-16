import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "../store/settings";

const initialState = {
  showLoadingPage: false,
};

const mainPersistConfig = {
  key: "main",
  storage: storage,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setShowLoadingPage: (state, action: PayloadAction<boolean>) => {
      state.showLoadingPage = action.payload;
    },
  },
});

export const { setShowLoadingPage } = mainSlice.actions;

export const mainPersistedReducer = persistReducer(
  mainPersistConfig,
  mainSlice.reducer
);
