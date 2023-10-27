import styles from "./ListItem.module.css";

const ListItem: React.FC<{
  task: string;
  caption: string;
  dateCreated: string;
}> = (props) => {
  return (
    <li className={styles.task}>
      <div className={styles.priority}>
        <div className={`${styles.circle} ${styles.success}`} />
      </div>
      <div className={styles["task-details"]}>
        <h3>{props.task}</h3>
        <div className={styles["task-captions"]}>
          <span>{props.caption}</span>
          <span>{props.dateCreated}</span>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
