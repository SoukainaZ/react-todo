import { useState } from "react";

export default function Form({ onAddTask }) {
  const [title, setTitle] = useState("");
  return (
    <form
      className="flex space-x-3 mb-4 rounded-lg bg-white px-3 py-2 shadow"
      onSubmit={(e) => {
        e.preventDefault();
        if (title === "") {
          alert("Please enter a task");
          return;
        }

        const newTask = {
          id: Date.now(),
          title,
          isDone: false,
        };

        onAddTask(newTask);
        setTitle("");
      }}
    >
      <input
        type="text"
        className="placeholder-gray-700 w-full focus:outline-0 py-1.5"
        placeholder="Start typing..."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button
        type="submit"
        className="text-white bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg"
      >
        Create
      </button>
    </form>
  );
}
