import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Content from './Layout/Content';
import './style.css';

class App extends Component {
     state={
         name: 'Rohith'
     }
 changename=()=>{
        this.setState({name:'Raj'})
     }
 onChangeHandler=(evt)=>{
    this.setState({name:evt.target.value})
    }

  render() {
    return (
      <Content  name={this.state.name} 
                changename={this.changename}
                onChangeHandler={this.onChangeHandler}></Content>
    );
  }
}

render(<App />, document.getElementById('root'));
