import { Component } from 'react';

interface IClassCompProps {
  stringProp: string;
  numberProp: number;
  stringArrayProp: string[]; 
}

interface IClassCompState {
  testing: string;
}

class ClassComp extends Component<IClassCompProps, IClassCompState> {
  constructor(props: IClassCompProps) {
    super(props);

    this.state = {
      testing: 'class component string',
    }
  }

  render() {
    return (
      <div>
        <div>Simple class component: {this.state.testing}</div>
        <div>{this.props.stringProp} - {this.props.numberProp}</div>
        <div>{this.props.stringArrayProp.map(str => `${str.toUpperCase()} `)}</div>
      </div>
    )
  }
}

export default ClassComp;
