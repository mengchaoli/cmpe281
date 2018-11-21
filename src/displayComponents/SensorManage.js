import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export class SensorManage extends React.Component {
	
	streetDataFetch = (street) => {
		switch(street) {
			default: return [
				{
					id: 1, 
					nodes:[
					{
						id: "Node1",
						status: "run",
					},
					{
						id: "Node2",
						status: "off",
					},
					{
						id: "Node3",
						status: "off",
					},
					{
						id: "Node4",
						status: "off",
					},
					{
						id: "Node5",
						status: "off",
					},
					{
						id: "Node6",
						status: "broken",
					}

					]

				},
				{
					
					id: 2, 
					nodes:[
					{
						id: "Node7",
						status: "run",
					},
					{
						id: "Node8",
						status: "run",
					},
					{
						id: "Node9",
						status: "run",
					},
					{
						id: "Node10",
						status: "run",
					},
					{
						id: "Node11",
						status: "off",
					},
					{
						id: "Node12",
						status: "broken",
					}

					]


				},
				{
					
					id: 3, 
					nodes:[
					{
						id: "Node1",
						status: "run",
					},
					{
						id: "Node2",
						status: "off",
					},
					{
						id: "Node3",
						status: "off",
					},
					{
						id: "Node4",
						status: "off",
					},
					{
						id: "Node5",
						status: "off",
					},
					{
						id: "Node6",
						status: "broken",
					}

					]


				},
				{
					
					id: 4, 
					nodes:[
					{
						id: "Node1",
						status: "run",
					},
					{
						id: "Node2",
						status: "off",
					},
					{
						id: "Node3",
						status: "off",
					},
					{
						id: "Node4",
						status: "off",
					},
					{
						id: "Node5",
						status: "off",
					},
					{
						id: "Node6",
						status: "broken",
					}

					]


				}
			];

			case "Nanjinglu" : return [
				{
					id: 1, 
					nodes:[
					{
						id: "Node1",
						status: "run",
					},
					{
						id: "Node2",
						status: "run",
					},
					{
						id: "Node3",
						status: "run",
					},
					{
						id: "Node4",
						status: "run",
					},
					{
						id: "Node5",
						status: "run",
					},
					{
						id: "Node6",
						status: "run",
					}

					]

				},
				{
					
					id: 2, 
					nodes:[
					{
						id: "Node1",
						status: "run",
					},
					{
						id: "Node2",
						status: "run",
					},
					{
						id: "Node3",
						status: "run",
					},
					{
						id: "Node4",
						status: "run",
					},
					{
						id: "Node5",
						status: "off",
					},
					{
						id: "Node6",
						status: "broken",
					}

					]


				},
				{
					
					id: 3, 
					nodes:[
					{
						id: "Node1",
						status: "run",
					},
					{
						id: "Node2",
						status: "off",
					},
					{
						id: "Node3",
						status: "off",
					},
					{
						id: "Node4",
						status: "off",
					},
					{
						id: "Node5",
						status: "off",
					},
					{
						id: "Node6",
						status: "broken",
					}

					]


				},
				{
					
					id: 4, 
					nodes:[
					{
						id: "Node1",
						status: "run",
					},
					{
						id: "Node2",
						status: "off",
					},
					{
						id: "Node3",
						status: "off",
					},
					{
						id: "Node4",
						status: "off",
					},
					{
						id: "Node5",
						status: "off",
					},
					{
						id: "Node6",
						status: "broken",
					}

					]


				}
			];
		}
	}

	state = {
		street: "Wuhandadao",
		cluster: 1,
		data:this.streetDataFetch("Wuhandadao"),
	}



	setStreet = (street) => {
		this.setState(
		  		{
		  			street: street,
		  			data: this.streetDataFetch(street),
		  		}
		);
	}

	render() {
		const options = [
		  { value: 'one', label: 'Wuhandadao' },
		  { value: 'two', label: 'Nanjinglu', className: 'myOptionClassName', onClick: () => this.setStreet("Nanjinglu")},
		  { value: 'three', label: 'Morison', className: 'myOptionClassName', onClick: () => this.setStreet("Morison") },
		  { value: 'four', label: 'Race', className: 'myOptionClassName', onClick: () => this.setStreet("Race") },
		  { value: 'five', label: 'Santa Clara', className: 'myOptionClassName', onClick: () => this.setStreet("Santa Clara") },
		];
		const defaultOption = this.state.street;
					// console.log(this.clu);
		return(

			<div> 
				<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
				<div>
					<button onClick={() => {this.setState({cluster: 2})}}> change cluster </button>
					<table>
						<tr>
	   					 <th>ID</th>
					    	<th>Status</th> 
					 	 </tr>
					  {this.state.data[this.state.cluster - 1].nodes.map(node => {
					  	return ( <tr key={node.id}>
								    <td>{node.id}</td>
								    <td>{node.status}</td> 
					  			</tr>);
					  })}

					</table>
				</div>
			</div>

			
		);
	}
}