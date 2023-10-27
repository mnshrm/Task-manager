import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./task-slice";

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
