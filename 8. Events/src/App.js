import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component{
btnClick(){
    alert("Button clicked");
  }
render(){	return(
			<div> 
			<p>{this.props.children}</p> 
			<button onClick={this.btnClick}>Click Here</button>
			</div>
			);
	}
}
export default App;
/*here in {this.props.children} children is property which will take the value that is pass by the time of rendering*/