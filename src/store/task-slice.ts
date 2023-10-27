import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import task from "../Models/task";

const initialState: { todoItems: task[] } = {
  todoItems: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    updateTasks(state, action: PayloadAction<task[]>) {
      state.todoItems = action.payload;
    },
    removeTasks(state, action: PayloadAction<string>) {
      state.todoItems = state.todoItems.filter(
        (t) => t._id! !== action.payload
      );
    },
  },
});

export const taskActions = taskSlice.actions;
export default taskSlice;
