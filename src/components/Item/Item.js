import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isComplete: this.props.isComplete };
  }

  markComplete = (e) => {};

  render() {
    return (
      <div className="item">
        <p>{this.props.name}</p>
        <input type="checkbox" />
      </div>
    );
  }
}

export default Item;
