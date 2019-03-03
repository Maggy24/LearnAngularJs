angular.module("companyData").factory("tableHeaderFields",tableHeaderFields);

function tableHeaderFields(){
	
   console.log("Inside tableHeaderFields");
   
	var fieldArray = ["Index","Id","Name","Salary","Age"]; 
	
	return fieldArray;
}