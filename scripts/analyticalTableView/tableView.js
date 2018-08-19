
import React, { Component } from 'react';

class TableView extends Component {
   constructor(){
     super();
  }  

  table=()=>{
    const dataColumns=this.props.data.columns;
    const dataRows=this.props.data.rows;
    const x = 900/ dataColumns.length;
    
    const headerStyle = {
              transformOrigin:'50% 50%',
              transform: 'rotate(290deg)',
              whiteSpace:'nowrap'
          }
    const firstHeaderStyle = {
              transformOrigin:'50% 50%',
              transform: 'rotate(290deg)',
              maxWidth: '100px'
          }   

    const topBorder = {
              borderTop:' 1px solid #888',
              borderRight: '1px solid #888'
          }

    const noBorder = {
              borderRight: '1px solid #888'
          }
 
    let tableHeaders=(
       <thead>
          <tr style={{height:'140px'}}>
             {
               dataColumns.map(function(column, index) {
                return <th style={{width:x+'px', maxWidth:x+'px',  textAlign:'center', borderRight:'1px solid #888'}}>
                  <div style={index == 0? firstHeaderStyle: headerStyle}>
                    {/*<span style={{borderBottom: '1px solid #ccc', padding:'5px 2px',  height: '140px', whiteSpace:'nowrap'}}>{column}</span>*/}
                    <span >{column}</span>
                  </div>
                  </th>; })
              }
          </tr>
       </thead>);

    let tableBody =( dataRows.map(function(row) {
        return (
            <tr key={row.key}>
                {row.groupHeading ? (dataColumns.map(function(column) {
                    return <td style={topBorder}><b>{row[column]}</b></td>;})): dataColumns.map(function(column) {
                    return <td style={noBorder}>{row[column]}</td>;}) }
            </tr>); 
        }));

        return (<table className="table" style={{border:'1px solid #888', fontSize: '14px', fontStyle: 'normal'}} width="100%">
        {tableHeaders}
        {tableBody}
        </table>)
    }

  render() {
   
    return (
     <div  className="inner-div">
        {this.table()}
      </div>
    );
  }
}

export default TableView;