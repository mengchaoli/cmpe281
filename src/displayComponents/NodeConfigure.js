import React from 'react';

export class NodeConfigure extends React.Component {
	render() {
		return(
			<div> 
				<table >
				  <tr>
				    <th>NodeNumber</th>
				    <th>Status</th> 
				    <th>Action</th>
				  </tr>
				  <tr>
				    <td>Node1</td>
				    <td>running</td> 
				    <td><a>stop</a> <a>delete</a></td>
				  </tr>
				  <tr>
				    <td>Node2</td>
				    <td>broken</td> 
				    <td><a>stop</a> <a>delete</a></td>
				  </tr>
				  <tr>
				    <td>Node3</td>
				    <td>running</td> 
				    <td><a>stop</a> <a>delete</a></td>
				  </tr>
				  <tr>
				    <td>Node4</td>
				    <td>off</td> 
				    <td><a>stop</a> <a>delete</a></td>
				  </tr>
				  <tr>
				    <td>Node5</td>
				    <td>running</td> 
				    <td><a>stop</a> <a>delete</a></td>
				  </tr>
				  <tr>
				    <td>Node6</td>
				    <td>running</td> 
				    <td><a>stop</a> <a>delete</a></td>
				  </tr>
				  <tr>
				    <td>Node7</td>
				    <td>broken</td> 
				    <td><a>stop</a> <a>delete</a></td>
				  </tr>
				</table>

			</div>
		);
	}
}