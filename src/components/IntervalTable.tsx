import React from 'react';
import { Interval } from "../Interval";
import { IntervalRow } from './IntervalRow';

export interface Props {
  intervals: Interval[];
  onIntervalChanged: (interval: Interval) => void;
}

export class IntervalTable extends React.Component<Props, object> {

  render() {
    const rows: JSX.Element[] = [];

    this.props.intervals.forEach((interval) => {
      rows.push(
        <IntervalRow
          interval={interval}
          key={interval.id}
          onChanged={this.props.onIntervalChanged} />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Interval Name</th>
            <th>Seconds</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
