import { createNewTask } from "../Actions/taskActions";
import task from "../Models/task";
import { useViewport } from "../context/viewportProvider";
import { AppDispatch } from "../store/store";
import styles from "./TodoForm.module.css";
import { useRef, useCallback, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const TodoForm: React.FC = () => {
  const taskRef = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const { isMobile, isDesktop } = useViewport();
  const createTask = useCallback(async () => {
    if (taskRef.current!.value.length !== 0) {
      setLoading(true);
      setErr("");
      const newTask: task = {
        task: taskRef.current!.value,
        createdAt: new Date().toISOString(),
        completed: false,
      };

      await dispatch(createNewTask(newTask));

      setLoading(false);
      taskRef.current!.value = "";
    } else setErr("Field can not be empty");
  }, [dispatch]);

  return (
    <>
      <div className={`${styles["todo-form"]}`}>
        {isDesktop && <h2>To-do form</h2>}
        <input
          disabled={loading}
          ref={taskRef}
          type="text"
          placeholder={isMobile ? "Add a task" : ""}
        />
        <button
          disabled={loading}
          onClick={createTask}
          className={loading ? styles.disabled : ""}
        >
          {loading ? <div className={styles.loader} /> : "+"}
        </button>
        {err.length !== 0 && (
          <span style={{ color: "red" }}>Field can not be empty!!</span>
        )}
      </div>
    </>
  );
};

export default TodoForm;
