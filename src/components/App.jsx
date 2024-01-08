import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const currentKey = e.target.textContent.toLowerCase();
    if (!this.state.hasOwnProperty(currentKey)) return;
    this.setState(prevState => {
      return { [currentKey]: prevState[currentKey] + 1 };
    });
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>
    );
  }
}
export { App };
