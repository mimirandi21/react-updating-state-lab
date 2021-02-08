// Code DigitalClicker Component Here
import React from "react";

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    };
  }

  clicky = () => {
    this.setState((previousState) => {
      return {
        timesClicked: previousState.timesClicked + 1,
      };
    });
  };

  render() {
    return <button onClick={this.clicky}>{this.state.timesClicked}</button>;
  }
}
export default DigitalClicker;
