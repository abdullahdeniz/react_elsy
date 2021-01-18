import React from "react";

class Icon extends React.Component {
  render() {
    return (
      <i
        className="material-icons"
        style={{ color: this.props.color, fontSize: this.props.size }}
      >
        {this.props.name}
      </i>
    );
  }
}

export default Icon;
