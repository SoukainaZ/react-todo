import Footer from "./Footer";
import TaskItem from "./TaskItem";
import { FILTERS } from "./constants";

export default function List({
  tasks,
  activeFilter,
  onDeleteTask,
  onToggleComplete,
  onActiveFilterChange,
  onClearTasks,
}) {
  let filteredTasks = tasks;
  if (activeFilter === FILTERS.ACTIVE) {
    filteredTasks = tasks.filter((task) => !task.isDone);
  } else if (activeFilter === FILTERS.COMPLETED) {
    filteredTasks = tasks.filter((task) => task.isDone);
  }
  return (
    <div className="rounded-lg bg-white shadow overflow-hidden">
      {filteredTasks.length > 0 ? (
        <div className="px-2">
          {filteredTasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                onDeleteTask={onDeleteTask}
                onToggleComplete={onToggleComplete}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-center text-sm text-slate-500 uppercase py-10 border-b">
          Empty list
        </p>
      )}
      <Footer
        tasks={tasks}
        activeFilter={activeFilter}
        onActiveFilterChange={onActiveFilterChange}
        onClearTasks={onClearTasks}
      />
    </div>
  );
}
