import React from 'react';
import Controls from './Controls';
import './Counter.css';
import Value from './Value';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 10,
  };
  // static propTypes = {};
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 10,
      }
    });
    this.setState(prevState => ({
      value: prevState.value + 10,
    }
    ));
    console.log('+value');
    // const target = event.target;  
  };
  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 10,
      }
    });
    console.log('-value');
  };

  render() {
    const { value } = this.state;
    return (
      <div className="Counter">
        <Value value={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}

        />
      </div>
    );
  }
}
export default Counter;


