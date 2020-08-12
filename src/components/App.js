import React from "react";
import "../style/App.css";
import TodoList from "./TodoList.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <TodoList name="This is my todolist" />
      </div>
    );
  }
}

export default App;
