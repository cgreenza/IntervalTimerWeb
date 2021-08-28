import React from 'react';
import './App.css';
import { Interval } from '../Interval';
import { IntervalTable } from './IntervalTable';
import { Timer } from './Timer';

const DEFAULT_INTERVALS: Interval[] = [
  new Interval('Interval 1', 20),
  new Interval('Interval 2', 10),
  new Interval('Interval 3', 20),
  new Interval('Interval 4', 10),
];

export interface Props {
}

interface State {
  intervals: Interval[];
}

export class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      intervals: DEFAULT_INTERVALS,
    };
  }

  onIntervalChanged = (interval: Interval) => {
    var newIntervals = this.state.intervals.map((x) => {
      if (x.id === interval.id)
        return interval;
      else
        return x;
    });
    this.setState({ intervals: newIntervals });
  }

  render() {
    return (
      <div className="App">
        <IntervalTable intervals={this.state.intervals} onIntervalChanged={this.onIntervalChanged} />
        <Timer intervals={this.state.intervals} />
      </div>
    );
  }
}

export default App;
