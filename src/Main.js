import React from 'react';
import { Sider } from './Sider.js';
import { MainContent } from './MainContent.js';

 export class Main extends React.Component {
 	state = {
 		content: 'dashboard',
 	}

 	changeContent = (item) => {
 		this.setState({
 			content: item,
 		});
 	}

	render() {
		return(
			<div style={{textAlign: "center", border: "10px solid black", height: 800, marginTop: 20, display: "flex"}}> 
				<Sider changeContent={this.changeContent} />
			 	<MainContent content={this.state.content} /> 
			</div>
		);
	}
}