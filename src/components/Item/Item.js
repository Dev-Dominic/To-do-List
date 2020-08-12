import React from "react";

class Item extends React.Component {
  markComplete = (e) => {
    // Updates state of item in list of items
    this.props.onComplete(e, this.props.itemID);
  };

  render() {
    return (
      <div className="item">
        <p className="itemName">{this.props.name}</p>
        <input
          className="itemCheckBox"
          type="checkbox"
          onClick={this.markComplete}
          disabled={this.props.isComplete}
        />
      </div>
    );
  }
}

export default Item;
