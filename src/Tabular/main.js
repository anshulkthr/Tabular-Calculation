import React, { Component } from 'react';
import Column from './table';

class Main extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: [
				{ id: 0, value_first:20, value_second:65, sum:'' },
				{ id: 1, value_first:30, value_second:15, sum:'' },
				{ id: 2, value_first:67, value_second:75, sum:'' },
				{ id: 3, value_first:17, value_second:32, sum:'' },
			]
		}
	}

	calculateSum = (e) => {
		let dataCopy = [...this.state.data];
		let filterId = Number(e.target.getAttribute('data-key'));
		dataCopy[filterId].sum = dataCopy[filterId].value_first + dataCopy[filterId].value_second;
		this.setState({dataCopy});
	}

	render(){
		return(
			<>
			 <Column action={ this.calculateSum } data={this.state.data} />
			</>
		)
	}
}

export default Main;