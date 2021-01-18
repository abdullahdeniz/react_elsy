import React from "react";
import Icon from "./core/Icon";
import Slider from "./core/Slider";

class Steps extends React.Component {
  render() {
    return (
      <div className="box col-6 col-md-3">
        <Icon name="favorite" color="red" size={100} />
        <p>{this.props.rate} BPM</p>
        <Slider
          value={this.props.rate}
          min={this.props.min}
          max={this.props.max}
          onChange={this.props.onHeartChange}
        />
      </div>
    );
  }
}

export default Steps;
