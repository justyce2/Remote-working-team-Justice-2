import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from "redux-persist";

import { userPersistedReducer, mainPersistedReducer } from "../slices";

// Combine reducers
const rootReducer = combineReducers({
  user: userPersistedReducer,
  main: mainPersistedReducer,
});

// Configure store with the persisted reducer and middleware
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Export RootState type
export type RootState = ReturnType<typeof store.getState>;

// Create persistor
export const persistor = persistStore(store);
