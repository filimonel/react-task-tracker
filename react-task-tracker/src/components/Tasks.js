// Task Component

import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          // Gets tasks id from task and sends task.id up to App.js
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
