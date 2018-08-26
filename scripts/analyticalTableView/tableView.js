
import React, { Component } from 'react';

class TableView extends Component {
   constructor(){
     super();
  }  

  table=()=>{
    const dataColumns=this.props.data.columns;
    const dataRows=this.props.data.rows;
    const x = 80;
    
    const headerStyle = {
     transform: 'skew(-30deg,0deg)',
    overflow: 'hidden',
    borderRight: '1px solid #888',
    position: 'relative',
    top: '0px',
    left: '40px',
    height: '100%',
    fontSize:'14px',
    fontWeight:'normal'
  }
  
   const headerText = {
    transform: 'skew(45deg,0deg) rotate(315deg)',
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    width: '80px',
    margin:'10px 0px'
          }
    const firstHeaderStyle = {
     transform: 'skew(-30deg,0deg)',
    overflow: 'hidden',
    borderRight: '1px solid #888',
    position: 'relative',
    top: '0px',
    left: '42px',
    height: '100%',
    fontSize:'14px',
    fontWeight:'normal'
          }   

   const thStyle = {
    height: '80px',
    width: '80px',
    position: 'relative',
    verticalAlign: 'bottom',
    padding: '0px',
   }
   const boldStyle = {
     fontWeight:'bold'
   }
    const topBorder = {
              borderTop:' 1px solid #888',
      borderRight: '1px solid #888',
      padding:'3px 5px',
      textAlign:'right'
          }

    const noBorder = {
      borderRight: '1px solid #888',
      padding:'3px 5px',
      textAlign:'right'
    }

    const tableStyle = {
      borderBottom: '1px solid #888',
      fontSize: '14px',
      fontStyle: 'arial',
          }
 
    let tableHeaders=(
       <thead>
          <tr style={{height:'140px'}}>
             {
               dataColumns.map(function(column, index) {
                return <th style={thStyle}>
                  <div style={index == 0? firstHeaderStyle: headerStyle}>
                    <span style={index != 0?headerText:{}} >{index != 0?column:'' }</span>
                  </div>
                  </th>; })
              }
          </tr>
       </thead>);

    let tableBody =( dataRows.map(function(row) {
        return (
            <tr key={row.key}>
                {
                  row.groupHeading ? (dataColumns.map(function(column, index) {
                      if(index == 0)
                      return <td style={{...topBorder, ...boldStyle}}>{row[column]}</td>;
                      else
                      return <td style={topBorder}>{row[column]}</td>;
                    })) : dataColumns.map(function(column, index) {
                      return <td style={noBorder}>{row[column]}</td>;
                     })
                    }
            </tr>); 
        }));

        return (<table className="table" style={tableStyle}>
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
