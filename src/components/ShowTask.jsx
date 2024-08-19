import React from "react";

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  // console.log(taskList);

  const tasks = [
    { id: 1, name: "Task A", time: "10:10 AM 8/19/2024" },
    { id: 2, name: "Task B", time: "10:10 AM 8/19/2025" },
    { id: 3, name: "Task C", time: "10:10 AM 8/19/2026" },
    { id: 4, name: "Task D", time: "10:10 AM 8/19/2027" },
    { id: 5, name: "Task E", time: "10:10 AM 8/19/2028" },
  ];

  const handleEdit = (id) => {
    const selectedTask = taskList.find((todo) => todo.id === id);

    // console.log(selectedTask);

    setTask(selectedTask);
  };

  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((todo) => todo.id !== id);

    setTaskList(updatedTaskList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo:</span>
          <span className="count">{taskList.length}</span>
        </div>

        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>

      <ul>
        {taskList.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>

            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(todo.id)}
            ></i>
            <i
              className="bi bi-trash"
              onClick={() => handleDelete(todo.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
