import React, { Component } from "react";
import { FeedBackForm } from "./FeedBack/FeedBack";
import { FeedBackStats } from "./StatiscticFeedBacks/StatisticFeedBacks";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  feedBack = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1
    }));
  };

  render() {
    return (
      <div>
        <FeedBackForm leaveFeedBack={this.feedBack} />
        <FeedBackStats items={this.state} />
      </div>
    );
  }
}

