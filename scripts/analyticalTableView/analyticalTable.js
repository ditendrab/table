
import React, { Component } from 'react';
import TableView from './tableView';

class AnalyticalTable extends Component {
   constructor(){
     super();
  }  

  bindDataToAnalyticalTable=()=>{
    let doc = jsPDF('p','pt','a4');
    let tableHtml = this.refs.table1;
   
    doc.addHTML(tableHtml,function() {
      doc.setFont("arial");
      doc.setFontType("normal");
      doc.setFontSize(90);
      doc.save('analyticaltable.pdf');
    });
  }

  render() {
  
    return (
     <div  style={{backgroundColor:'#FFF'}} ref="table1">
       <button onClick={this.bindDataToAnalyticalTable}>pdf</button>
       <TableView data = {this.props.data}/>
      </div>
    );
  }
}

export default AnalyticalTable;