import { useEffect } from "react";
import styles from "./TodoList.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { AppDispatch, RootState } from "../store/store";
import { getTasks } from "../Actions/taskActions";
import ListItem from "./ListItem";

const getDateTime = () => {
  const date = new Date();
  return date.toLocaleDateString("en-us", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
};

const TodoList: React.FC = () => {
  // State to store array of tasks
  const todoTasks = useSelector((state: RootState) => state.tasks.todoItems);
  const dispatch: AppDispatch = useDispatch();

  // Fetch all tasks
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <>
      <div className={styles.banner}>
        <h1>Today</h1>
        <span>{getDateTime()}</span>
      </div>
      <div className={styles.list}>
        <h3>{todoTasks.length ? "Tasks" : "No tasks pending"}</h3>
        <ol>
          {todoTasks.map((t) => (
            <ListItem
              key={t._id}
              task={t.task}
              caption={"An import task"}
              dateCreated={new Date(t.createdAt).toLocaleDateString("en-us", {
                weekday: "short",
                day: "numeric",
                month: "short",
              })}
            />
            // <li key={t._id!}>
            //   <span>{t.completed ? <s>{t.task}</s> : t.task}</span>
            //   <div className={styles["btn-group"]}>
            //     <button
            //       onClick={dispatch.bind(
            //         null,
            //         changeTaskStatus(t._id!, !t.completed)
            //       )}
            //       className={styles.success}
            //     >
            //       {t.completed ? "Not Done" : "Done"}
            //     </button>
            //     <button
            //       onClick={dispatch.bind(null, deleteTask(t._id!))}
            //       className={styles.danger}
            //     >
            //       Delete
            //     </button>
            //   </div>
            // </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default TodoList;
