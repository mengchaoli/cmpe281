import React from 'react';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Highcharts from 'highcharts'

ReactChartkick.addAdapter(Highcharts)

export class HistoryData extends React.Component {
	render() {
		return(
			<div> 
				<LineChart data={{"2017-01-01": 11, "2017-01-03": 9, "2017-01-04": 16, "2017-01-05": 56, "2017-01-06": 6, "2017-01-07": 12, "2017-01-08": 2, "2017-01-09": 3, "2017-01-10": 7, "2017-01-11": 12, "2017-01-12": 13
				, "2017-01-13": 6, "2017-01-14": 32, "2017-01-15": 16, "2017-01-17": 26, "2017-01-18": 20, "2017-01-19": 19, "2017-01-20": 26}} />
			</div>
		);
	}
}



