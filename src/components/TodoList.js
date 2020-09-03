import React, { useState } from "react";
import Item from "./Item.js";

function TodoList() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([
    { name: "First Item", isComplete: false },
  ]);

  // Adds a new item to the array items
  const addItem = (condition) => {
    if (condition) {
      setItems([...items, { name: item, isComplete: false }]);
      setItem("");
    }
  };

  const addItemButton = () => addItem(item);
  const addItemEnter = (e) => addItem(item && e.key === "Enter");

  // Marks an item as complete
  const setItemComplete = (e, index) => {
    const updatedItems = [...items];
    updatedItems[index].isComplete = true;
    setItems(updatedItems);
  };

  // Updates the state of an item that may possibly added to items
  const updateItem = (e) => setItem(e.target.value);

  return (
    <div className="mt-2">
      <div className="flex justify-between">
        <input
          className="w-4/5 py-1 px-2"
          type="text"
          placeholder="Add a new item"
          value={item}
          onChange={updateItem}
          onKeyPress={addItemEnter}
        />
        <button
          className="border w-1/6 bg-gray-500 text-sm text-white font-semibold"
          onClick={addItemButton}
        >
          Add
        </button>
      </div>

      <div className="mt-4">
        {items.map(({ name, isComplete }, index) => (
          <Item
            key={index}
            itemID={index}
            name={name}
            isComplete={isComplete}
            onComplete={setItemComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
