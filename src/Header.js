import React from 'react';

export class Header extends React.Component {
	render() {
		return(
			<div className="header" style={{background: "black", color: "white", fontSize: 20, fontWeight: "bolder", height: 80}}> 
				<span style={{position: "absolute", left: 10, padding: "1%", fontSize: 30}}>DarkCloudRises </span>

				<a href="#" style={{position: "absolute", right: 10, padding: "1%"}} > login </a>

			</div>
		);
	}
}
