const xlsx = require('xlsx');
const fs = require('fs');

// const wb = xlsx.readFile("./file_example_XLS_100.xls");
const wb = xlsx.readFile("./xlsx/NotTransfer.xls");
// // console.log(wb.SheetNames)
const ws = wb.Sheets['Sheet1'];
// // console.log(ws)
const data = xlsx.utils.sheet_to_json(ws, {row: false})
console.log(data)