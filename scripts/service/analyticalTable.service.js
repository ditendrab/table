import { apiData } from './../json/inputData'

function getHeaders(substances) {
    let headers = [];
    for (let index = 0; index < substances.length; index++) {
        let substance = substances[index];
        headers.push({ id: substance.id, title: substance.title })
    }
    return headers;
}

function getColumnsInSingleObject(columns) {
    let columnsObj = {};

    for (let index = 0; index < columns.length; index++) {
        let column = columns[index];
        columnsObj[column.id] = '';
    }
    return columnsObj;
}
function getRows(apiData, columns) {
    let rows = []
    
    if (apiData && apiData.wells && apiData.wells.my_wells && columns) {
        let columnsObj = getColumnsInSingleObject(columns);
        let myWells = apiData.wells.my_wells;
        let wellNames = Object.keys(myWells);
        for (let index = 0; index < wellNames.length; index++) {
            let wellName = wellNames[index];
            let copyColumnsObj = Object.assign({}, columnsObj);
            copyColumnsObj[0] = wellName;
            rows.push(Object.assign({}, { date: wellName, groupHeading: true, groupName: '' }, copyColumnsObj));
            let samples = myWells[wellName].samples ? myWells[wellName].samples : [];
            
            for (let rowIndex = 0; rowIndex < samples.length; rowIndex++) {
                let sample = samples[rowIndex];
                let substances = samples[rowIndex].substances ? samples[rowIndex].substances : {};
                let copyColumnsObj = Object.assign({}, columnsObj);
                let copyColumnsObjKeys = Object.keys(copyColumnsObj);
            
                for (let colIndex = 0; colIndex < copyColumnsObjKeys.length; colIndex++) {
                    let copyColumnsObjKey = copyColumnsObjKeys[colIndex];
                    copyColumnsObj[copyColumnsObjKey] = substances && substances[copyColumnsObjKey] && substances[copyColumnsObjKey].value && substances[copyColumnsObjKey].value != '' ? substances[copyColumnsObjKey].value : '--';
                }
                
                   rows.push(Object.assign({}, { date: sample.date_collected, groupHeading: false }, copyColumnsObj));
            }
        }
    }
    return rows;
}

export const getAnalyticalData = function () {
    let columns = getHeaders(apiData.substances);
    let rows = getRows(apiData, columns);
    columns.unshift({id:'0', title:''});
    rows.unshift({ 
        'date': 'Generic Criteria',
        'groupHeading':true,
        'groupName':'Generic'
      });
    return {columns: columns, rows: rows};
}

