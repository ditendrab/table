import React, { Component } from 'react';
import AnalyticalTable from './analyticalTableView/analyticalTable';
import TableData from './json/data';
import { getAnalyticalData } from './service/analyticalTable.service';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

 

  render() {
    let tableData = getAnalyticalData()
    
    return (
      <div className="container">
        <AnalyticalTable data={tableData} />
      </div>
    );
  }
}

export default App;