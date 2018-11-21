import React from "react";
//import { render } from "react-dom";
import { makeData } from "../Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export class DashBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "Street Name",
                  accessor: "firstName"
                },
                {
                  Header: "Node Number",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Sensor data",
              columns: [
                {
                  Header: "Light",
                  accessor: "light"
                },
                {
                  Header: "Temperature",
                  accessor: "temperature"
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}