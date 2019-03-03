angular.module("companyData").factory("empFieldDetails",empFieldDetails);
function empFieldDetails(){
    console.log("Inside empFieldDetais");
    var fieldDetails = {
        data : [
            {
                label : "Enter Emp Id :",
                bindValue : "emp.empData.eid"
            },{
                label : "Enter Emp Name :",
                bindValue : "emp.empData.ename"
            },{
                label : "Enter Emp Salary :",
                bindValue : "salary"
            },{
                label : "Enter Emp Age :",
                bindValue : "age"
            },
        ]
    };
    
    return fieldDetails;
    
}