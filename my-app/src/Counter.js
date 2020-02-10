import React from 'react';

class Counter extends React.Component{

  constructor(props){
    super(props)
    this.state={
      counter: props.initial,
      add: props.valueAdd
    }
  }

  render(){
    return(
      <div algin="center">
        <h4>Count current in: {this.state.counter}</h4>
        <button onClick={()=> this.setState({ counter: this.state.counter - this.state.add})}>[-] Diminuir</button>
        <button onClick={()=> this.setState({ counter: this.state.counter + this.state.add})}>[+] Aumentar</button>
      </div>
      );
  }
}

export default Counter;