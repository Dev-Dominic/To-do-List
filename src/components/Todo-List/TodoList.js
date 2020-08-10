import React from "react";
import Item from "../Item/Item.js";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      items: [
        {
          name: "This is the first item",
          isComplete: false,
        },
      ],
    };
  }

  // Adds a new item to the array items
  addItem = (e) => {
    e.preventDefault();

    /*
      Updating the array of items with a new item and resetting the value of item
    */
    this.setState((state) => ({
      items: [...state.items, { name: state.item, isComplete: false }],
      item: "",
    }));
  };

  // Updates the state of an item that may possibly added to items
  setItem = (e) => {
    this.setState({ item: e.target.value });
  };

  render() {
    return (
      <div className="todo-list">
        <div className="todo-list-toolbar">
          <input
            type="text"
            id="addItemField"
            placeholder="Add a new item"
            value={this.state.item}
            onChange={this.setItem}
          />
          <button onClick={this.addItem}>Add</button>
        </div>

        {this.state.items.map(({ name, isComplete }) => (
          <Item key={name} name={name} isComplete={isComplete} />
        ))}
      </div>
    );
  }
}

export default TodoList;