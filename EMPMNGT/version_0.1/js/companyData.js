// CRUD operation & Search
angular.module("companyData", []);

angular.module("companyData").controller("EmployeeDataCtrl", EmployeeDataCtrl);
EmployeeDataCtrl.$inject = ['$scope'];

function EmployeeDataCtrl($scope) {
    console.log("inside EmployeeDataCtrl");
    
    var vm = this;
    vm.empDetails = [];
    vm.empData = {
        eid : "",
        ename : "",
        salary : "",
        age : ""
    }
    vm.update_index = -1;
    
    vm.add = function (event) {
        console.log("Inside add method");
        vm.empDetails.push(vm.empData);
        console.log("EmpDetails Obj : ", vm.empDetails);
        vm.empData = {};
    }
    vm.update = function(index){
        console.log("Inside update method");    
        var emp = vm.empDetails[index];
        vm.empData.eid = emp.eid;
        vm.empData.ename = emp.ename;
        vm.empData.salary = emp.salary;
        vm.empData.age = emp.age;
        
        vm.update_index = index;
    }
    vm.delete = function(index){
        console.log("Inside Delete method");
        vm.empDetails.splice(index,1);
        alert("Deleted");
    }
    vm.save = function(update_index){
        console.log("Inside Save method");
        vm.empDetails[update_index] = vm.empData;
        vm.empData = {};
    }
}
// angular search 
// angular sort element on header click ( by name,date, age, salary)