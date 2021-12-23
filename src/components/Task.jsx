import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={task.reminder ? "task reminder" : "task"}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.title}
        <FaTimes style={styles.icon} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

const styles = {
  icon: {
    color: "red",
    cursor: "pointer",
  },
};

export default Task;
