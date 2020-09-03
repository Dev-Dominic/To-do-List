import React from "react";

function Item({ itemID, name, isComplete, onComplete }) {
  return (
    <div className="flex justify-start items-center">
      <input
        className="itemCheckBox"
        type="checkbox"
        onClick={(e) => onComplete(e, itemID)}
        disabled={isComplete}
      />
      <p className="ml-5 text-lg">{name}</p>
    </div>
  );
}

export default Item;
