import React from "react";

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target.value);
    // console.log(e.target.task.value);
    if (task.id) {
      // For edit task
      const date = new Date();
      const updatedTask = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              // name: e.target.task.value,
              name: task.name,
              time: `${date.toLocaleTimeString()}, ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTaskList(updatedTask);
      setTask({});
    } else {
      // For add task
      const date = new Date();
      // console.log(date);
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()}, ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
      // e.target.task.value = "";
      setTask({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};

export default AddTask;
