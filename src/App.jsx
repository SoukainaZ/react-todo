import { useEffect, useState } from "react";
import Form from "./Fomr";
import Header from "./Header";
import List from "./List";
import { FILTERS } from "./constants";

// const defaultState = {
//   tasks: [],
//   activeFilter: FILTERS.ALL,
// };

function loadData() {
  let state = {
    tasks: [],
    activeFilter: FILTERS.ALL,
  };
  try {
    state = JSON.parse(localStorage.getItem("tasks-with-filter")) || {
      tasks: [],
      activeFilter: FILTERS.ALL,
    };
  } catch (error) {}
  return state;
}

function App() {
  const [state, setState] = useState(loadData());

  useEffect(() => {
    try {
      localStorage.setItem("tasks-with-filter", JSON.stringify(state));
    } catch (error) {}
  }, [state]);

  function onAddTask(task) {
    setState({
      ...state,
      tasks: [...state.tasks, task],
    });
  }

  function onActiveFilterChange(activeFilter) {
    setState({
      ...state,
      activeFilter,
    });
  }

  function onDeleteTask(taskId) {
    setState({
      ...state,
      tasks: state.tasks.filter((t) => t.id !== taskId),
    });
  }

  function onToggleComplete(taskId) {
    setState({
      ...state,
      tasks: state.tasks.map((task) => {
        if (task.id === taskId) {
          task.isDone = !task.isDone;
        }
        return task;
      }),
    });
  }

  function onClearTasks() {
    setState({
      ...state,
      tasks: state.tasks.filter((task) => !task.isDone),
    });
  }

  return (
    <>
      <Header tasks={state.tasks} />
      <Form onAddTask={onAddTask} />
      <List
        tasks={state.tasks}
        onDeleteTask={onDeleteTask}
        onToggleComplete={onToggleComplete}
        activeFilter={state.activeFilter}
        onActiveFilterChange={onActiveFilterChange}
        onClearTasks={onClearTasks}
      />
    </>
  );
}

export default App;
