import React from "react";
import Water from "./components/Water";
import Person from "./components/Person";
import Sun from "./components/Sun";
import Heart from "./components/Heart";

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000
    };

    // hello world

    this.onTemperatureChange = this.onTemperatureChange.bind(this);
    this.onStepsChange = this.onStepsChange.bind(this);
    this.onHeartChange = this.onHeartChange.bind(this);
  }

  calculateWater({
    rate = this.state.heart,
    steps = this.state.steps,
    temperature = this.state.temperature
  } = {}) {
    console.log("#calculateWater");
    let liters = 1.5;

    if (temperature > 20) {
      let greaterTemp = temperature - 20;
      liters += greaterTemp * 0.02;
    }
    if (rate > 120) {
      let greaterRate = rate - 120;
      liters += greaterRate * 0.0008;
    }
    if (steps > 10000) {
      let greaterSteps = steps - 10000;
      liters += greaterSteps * 0.00002;
    }

    return parseInt(liters * 100) / 100;
  }

  onHeartChange(rate) {
    console.log('App#onHeartChange rate', rate);
    const water = this.calculateWater({
      rate: rate,
      steps: this.state.steps,
      temperature: this.state.temperature
    });

    this.setState({
      water: water,
      heart: rate
    });
  }

  onStepsChange(steps) {
    console.log('App#onStepsChange steps', steps);
    const water = this.calculateWater({
      rate: this.state.heart,
      steps: steps,
      temperature: this.state.temperature
    });

    this.setState({
      water: water,
      steps: steps
    });
  }

  onTemperatureChange(temperature) {
    console.log('App#onTemperatureChange temperature', temperature);
    const water = this.calculateWater({
      rate: this.state.heart,
      steps: this.state.steps,
      temperature: temperature
    });

    this.setState({
      water: water,
      temperature: temperature
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Water water={this.state.water} />
          <Person
            steps={this.state.steps}
            min={MIN_STEPS}
            max={MAX_STEPS}
            onStepsChange={this.onStepsChange}
          />
          <Heart
            rate={this.state.heart}
            min={MIN_HEART}
            max={MAX_HEART}
            onHeartChange={this.onHeartChange}
          />
          <Sun
            temperature={this.state.temperature}
            min={MIN_TEMPERATURE}
            max={MAX_TEMPERATURE}
            onTemperatureChange={this.onTemperatureChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
