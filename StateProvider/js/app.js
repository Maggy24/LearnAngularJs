//https://github.com/angular-ui/ui-router/wiki/Nested-States-%26-Nested-Views
angular.module("app",['ui.router']);
angular.module("app").value("myId",{id:12});
angular.module("app").value("MYId",13);
angular.module("app").config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("about-us",{
            url : "/about-us",
            templateUrl : "partials/about-us.html",
            controller : "AboutUsCtrl",
            controllerAs : "about"
        })
       .state("contact-us",{
            url : "/contact-us?:id&:sub-id",
            templateUrl : "partials/contact-us.html",
            controller: "ContactUsCtrl"
        })
        .state("contact-us.india",{
            url : "/contact-us-india",
            templateUrl : "partials/contact-us-india.html",
        })
        .state("contact-us-uk",{
            url : "/contact-us-uk/:id",
            templateUrl : "partials/contact-us-uk.html",
            controller: "ContactUsCtrl"
        })
        .state("services",{
            url : "/services",
            templateUrl : "partials/services.html",
            data : { serviceTitle : "PapaJones" }
        }) 
        .state("home",{
            url : "/home",
            templateUrl : "partials/home.html"
        }) 
       .state("landing",{
            url : "/",
            template : "",
            templateUrl : "partials/home.html" 
        });  
   // $urlRouterProvider.otherwise("/home");

    console.log("Inside the config");
});


//Controllers
angular.module("app").controller('AboutUsCtrl',AboutUsCtrl);
AboutUsCtrl.$inject = ['$scope'];
function AboutUsCtrl($scope,$stateParams){
    $scope.title = "Papa Jones";
}
angular.module("app").controller('ContactUsCtrl',ContactUsCtrl);
ContactUsCtrl.$inject = ['$scope', '$stateParams'];
function ContactUsCtrl($scope,$stateParams){
    console.log(`Inside ContactCtrl..... stateparam obj :$`,$stateParams);
    $scope.params = $stateParams;
    $scope.contactId = 001;
}
angular.module("app").controller('ContainerCtrl',ContainerCtrl);
ContainerCtrl.$inject = ['$scope','$state'];
function ContainerCtrl($scope,$state){
    console.log(`Inside ContainerCtrl....`);
    $scope.parentId = 010123;
   // $state.transitionTo('contact-us.india');
       // $state.go('home');
}
