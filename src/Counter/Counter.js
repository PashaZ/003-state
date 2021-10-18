import React from 'react';
import Controls from './Controls';
import './Counter.css';
import Value from './Value';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 10,
  };
  static propTypes = {};
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
    return (
      <div className="Counter">
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}

        />
      </div>
    );
  }
}
export default Counter;


// import React, { Component } from 'react';
// import Controls from './Controls';
// import Value from './Value';
// import './Counter.css';

// class Counter extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   static propTypes = {
//     //
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     const { value } = this.state;

//     return (
//       <div className="Counter">
//         <Value value={value} />

//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }

// export default Counter;
