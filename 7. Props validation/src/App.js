import React from 'react';
//import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends React.Component{

	render(){
		return(
			<div>/* Create some properties*/
				<h1>Hello, {this.props.name}</h1>
				<h3>Array: {this.props.propArray} </h3>
				<h3>Bool: {this.props.propBool?"True...":"False..."} </h3>
				<h3>Func: {this.props.propFunc(3)} </h3>
				<h3>Number: {this.props.propNumber} </h3>
				<h3>String: {this.props.propString} </h3>
				</div>
			);
	}
}
App.propTypes={
	name:PropTypes.string,
	propArray:PropTypes.array.isRequired, //isRequired means mandatory
	propBool:PropTypes.bool.isRequired,
	propFunc:PropTypes.func,
	propNumber:PropTypes.number,
	propString:PropTypes.string,
};

App.defaultProps={
	name:'Vinay Chandel',
	propArray:[10,11,12,13,14,15],
	propBool:true,
	propFunc:function(e){
		return e
	},
	propNumber:1,
	propString:"String value..."
};
export default App;
