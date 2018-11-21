import React from 'react';
import { DashBoard } from './displayComponents/DashBoard.js';
import { Map } from './displayComponents/Map.js';
import { UserPanel } from './displayComponents/UserPanel.js';
import { Chart } from './displayComponents/Chart.js';
import { HistoryData } from './displayComponents/HistoryData.js';
import { SensorManage } from './displayComponents/SensorManage.js';
import { NodeConfigure } from './displayComponents/NodeConfigure.js';
 
export class MainContent extends React.Component {

	getContent = () => {
		switch(this.props.content) {
			default: return <DashBoard/>;
			case "dashboard": return <DashBoard/>;
			case "map": return <Map/>;
			case "userPanel": return <UserPanel/>;
			case "chart": return <Chart/>;
			case "historyData": return <HistoryData/>;
			case "sensorManage": return <SensorManage/>;
			case "nodeConfigure": return <NodeConfigure/>;
		}
	}
	
	render() {
		const mainContent = this.getContent();

		return(
			<div style={{height: "100%", width: "80%", textAlign: "center", fontSize: 30, fontWeight: "bolder", marginTop: "1%"}}>
				{mainContent}
			</div>
		);
	}
}