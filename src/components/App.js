import React from "react";
import "../styles/main.css";
import TodoList from "./TodoList.js";

function App() {
  return (
    <div className="bg-gray-200 flex justify-center w-full h-full">
      <div className="w-3/4 md:w-1/2 mt-24">
        <h1 className="text-xl font-bold">To-do List</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
