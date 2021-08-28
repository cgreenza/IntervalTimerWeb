import React from 'react';
import { Interval } from '../Interval';

export interface Props {
  interval: Interval;
  onChanged: (interval: Interval) => void;
}

export class IntervalRow extends React.Component<Props, object> {
  render() {
    const interval = this.props.interval;

    const onChange = <P extends keyof Interval>(prop: P, value: Interval[P]) => {
      this.props.onChanged({...interval, [prop]: value});
    };

    return (
      <tr>
        <td><input value={interval.name} onChange={e => { onChange('name', e.target.value); }} /></td>
        <td><input value={interval.seconds} onChange={e => { onChange('seconds', parseInt(e.target.value)); }} /></td>
      </tr>
    );
  }
}