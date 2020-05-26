import React from 'react';
//import logo from './logo.svg';
import './App.css';


class App extends React.Component{

	constructor(){
		super();
		this.state={
			count:0
		}
	}

btnClick(){
		this.setState({
			count:this.state.count+1
		});
	}

	render(){
		return(
			<div> 
			<h1>Value:{this.state.count}</h1>
			<br/>
			<button onclick={this.btnClick.bind(this)}>Increment by 1</button>
			</div>);
	}
}
export default App;
/*here in {this.props.children} children is property which will take the value that is pass by the time of rendering*/