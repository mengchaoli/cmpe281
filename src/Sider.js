import React from 'react';
import { Button } from 'reactstrap';

export class Sider extends React.Component {
	render() {
		const itemStyle = {margin: "10px 0", height: 30};
		return(
			// <div className="sider" style={{display: "flex", flexDirection: "column", height: "100%", width: "20%", marginTop: "20%"}}>
			// 	<button className="siderItem" style={itemStyle} onClick={() => this.props.changeContent('dashboard')}> DashBoard </button>
			// 	<button className="siderItem" style={itemStyle} onClick={() => this.props.changeContent('map')}> Map </button>
			// 	<button className="siderItem" style={itemStyle}  onClick={() => this.props.changeContent('userPanel')} > UserPanel </button>
			// 	<button className="siderItem" style={itemStyle}  onClick={() => this.props.changeContent('chart')}> Chart </button>
			// 	<button className="siderItem" style={itemStyle}  onClick={() => this.props.changeContent('historyData')}> HistoryData </button>
			// 	<button className="siderItem" style={itemStyle}  onClick={() => this.props.changeContent('sensorManage')}> SensorManage </button>
			// </div>
			<div className="sider" style={{display: "flex", flexDirection: "column", height: "100%", width: "10%", marginTop: "3%", padding:20}}>
				<Button color="primary" size="lg" className="siderItem" style={itemStyle} onClick={() => this.props.changeContent('dashboard')}> DashBoard </Button>{' '}
				
				<Button color="primary" size="lg" className="siderItem" style={itemStyle} onClick={() => this.props.changeContent('userPanel')}> UserPanel </Button>{' '}
				
				<Button color="primary" size="lg" className="siderItem" style={itemStyle} onClick={() => this.props.changeContent('historyData')}> HistoryData </Button>{' '}
				<Button color="primary" size="lg" className="siderItem" style={itemStyle} onClick={() => this.props.changeContent('sensorManage')}> SensorManage </Button>{' '}
				<Button color="primary" size="lg" className="siderItem" style={itemStyle} onClick={() => this.props.changeContent('nodeConfigure')}> NodeConfigure </Button>{' '}
			</div>
		);
	}

}