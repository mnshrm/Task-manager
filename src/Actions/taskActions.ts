import task from "../Models/task";
import { AppDispatch } from "../store/store";
import { taskActions } from "../store/task-slice";

export const createNewTask: (newTask: task) => (d: AppDispatch) => void = (
  newTask
) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:5000/", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    dispatch(taskActions.updateTasks(responseData.tasks));
  };
};

export const deleteTask: (taskId: string) => (d: AppDispatch) => void = (
  taskId
) => {
  return async (dispatch) => {
    await fetch("http://localhost:5000", {
      method: "DELETE",
      body: JSON.stringify({
        _id: taskId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch(taskActions.removeTasks(taskId));
  };
};

export const getTasks: () => (d: AppDispatch) => void = () => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:5000");
    const tasks: { tasks: task[] } = await response.json();
    dispatch(taskActions.updateTasks(tasks.tasks));
  };
};

export const changeTaskStatus: (
  str: string,
  status: boolean
) => (d: AppDispatch) => void = (_id, status) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:5000", {
      method: "PATCH",
      body: JSON.stringify({
        _id,
        status,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("here");
    dispatch(taskActions.updateTasks(data.tasks));
  };
};
