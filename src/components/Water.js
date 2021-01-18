import React from "react";
import Icon from "./core/Icon";

class Water extends React.Component {
  render() {
    console.log("this.props.water", this.props.water);
    return (
      <div className="box col-6 col-md-3">
        <Icon name="local_drink" size={100} color="#3A85FF" />
        <p>{this.props.water} L</p>
      </div>
    );
  }
}

export default Water;
