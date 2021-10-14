function createEmployeeRecord(employee){
//"time card"
const createEmployeeRecord = {
firstName: employee[0],
familyName: employee[1],
title: employee[2],
payPerHour: employee[3],
timeInEvents: [],
timeOutEvents: []
 }
    return createEmployeeRecord
}
//create employee records
function createEmployeeRecords(arrayEmp){
let newArr = arrayEmp.map(
function (employ){
    return createEmployeeRecord(employ)    
})
    return newArr
}    
function calculatePayroll(arrayEmps) {    
    return arrayEmps.map(employ => allWagesFor(employ)).reduce((a,b) => (a = a+b),0)
}
function allWagesFor(employee){
console.log(employee.timeInEvents);
const newDate = employee.timeInEvents.map(employee => employee.date)
    return newDate.reduce((total, date) => total + wagesEarnedOnDate(employee, date),0) 
}
function wagesEarnedOnDate(employee, workDate){
    return employee.payPerHour * hoursWorkedOnDate(employee, workDate)
}
function hoursWorkedOnDate(employee, workDate){
let inTime = employee.timeInEvents.filter((elmt)=> elmt.date === workDate).map((element) => element.hour);
let outTime = employee.timeOutEvents.filter((elmt)=> elmt.date === workDate).map((element) => element.hour);
    return (outTime - inTime ) / 100;
}
function createTimeInEvent(employee, dateStamp){
let [date, hour] = dateStamp.split(' ') 
hour = parseInt(hour)
let type = 'TimeIn'
employee.timeInEvents.push({type, hour, date}) 
   return employee
}
function createTimeOutEvent(employee, dateStamp){
let [date, hour] = dateStamp.split(' ') 
hour = parseInt(hour)
let type =  'TimeOut'
employee.timeOutEvents.push({type, hour, date})   
    return employee
}