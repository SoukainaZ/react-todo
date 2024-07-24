import { FILTERS } from "./constants";

export default function Footer({
  tasks,
  activeFilter,
  onActiveFilterChange,
  onClearTasks,
}) {
  const itemsLeft = tasks.filter((task) => !task.isDone).length;
  const isPlural = itemsLeft > 1;
  const message = `${itemsLeft} ${isPlural ? "items" : "item"} left`;
  return (
    <div className="flex justify-between px-4 py-3">
      <p>{message}</p>
      <div className="flex space-x-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onActiveFilterChange(FILTERS.ALL);
          }}
          className={`hover:underline ${
            activeFilter === FILTERS.ALL
              ? "font-medium underline text-purple-600"
              : ""
          }`}
        >
          All
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onActiveFilterChange(FILTERS.ACTIVE);
          }}
          className={`hover:underline ${
            activeFilter === FILTERS.ACTIVE
              ? "font-medium underline text-purple-600"
              : ""
          }`}
        >
          Active
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onActiveFilterChange(FILTERS.COMPLETED);
          }}
          className={`hover:underline ${
            activeFilter === FILTERS.COMPLETED
              ? "font-medium underline text-purple-600"
              : ""
          }`}
        >
          Completed
        </a>
      </div>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          const isTrue = window.confirm("Are you sure?");
          if (isTrue) {
            onClearTasks();
          }
        }}
        className="hover:underline"
      >
        Clear completed
      </a>
    </div>
  );
}
