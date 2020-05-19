import React, { Component } from 'react';

class Column extends Component{
	render(){
		return(
			<table className="dataContainer">
				<tbody>
					{ this.props.data.map((item, key) =>
						<tr key={item.id}>
					      <td className="dataContainerColumn">{item.value_first}</td>
					      <td className="dataContainerColumn">{item.value_second}</td>
					      <td className="dataContainerManipulate">
						      <div className="submitButton">
								<button data-key={item.id} onClick={ this.props.action }>SUBMIT</button>
							  </div>
						  </td>
					      <td className="dataContainerColumn">{item.sum}</td>
					  	</tr>
					)}
				</tbody>
			</table>
		);
	}
}

export default Column;