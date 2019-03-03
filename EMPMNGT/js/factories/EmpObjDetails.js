angular.module("companyData").factory("employeeData", employeeData);

function employeeData() {
    console.log("Inside Employee Data");
    
    var empDataArray = [
        {
            eid : 101,
            ename : "Jay",
            salary : 10100,
            age : 34
        },{
            eid : 102,
            ename : "SanJay",
            salary : 101001,
            age : 23
        },{
            eid : 103,
            ename : "ViJay",
            salary : 101002,
            age : 30
        },{
            eid : 104,
            ename : "AJay",
            salary : 101003,
            age : 32
        },
    ];
     return empDataArray;
}