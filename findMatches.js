<!DOCTYPE html>
<html ng-app="plunker">

  <head>
    <meta charset="utf-8" />
    <title>AngularJS Plunker</title>
  </head>

  <body ng-controller="MainCtrl">
    
    <input type='text' ng-model='search' id='search' ng-change="matches = findMatches(data, search)">
    <hr/>
    
    <ul>
      <li ng-repeat="item in matches track by $index">{{item.name}} and {{item.type}}</li>
    </ul>
    
    <script data-require="angular.js@1.4.x" src="https://code.angularjs.org/1.4.8/angular.js" data-semver="1.4.8"></script>
    <script>
      
var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.data = [{
    beast: 'rat',
    color: 'red',
    price: 5000,
    size: '100 kg'
  }, {
    beast: 'cat',
    color: 'white',
    price: 4000,
    size: '500 kg'
  }, {
    beast: 'bird',
    color: 'pink',
    price: 3000,
    size: '200 kg'
  },
  {
    beast: 'anaconda',
    color: 'black-red',
    price: 10000,
    size: '5000 kg'
  }];

  $scope.matches = [];

  $scope.findMatches = function(items, searchText) {
    var results = [];
    if (searchText) {
      angular.forEach(items, function(item) {
        if (item.beast.indexOf(searchText) === 0) {
          results.push({
            name: item.beast,
            type: 'animal'
          });
        }

        if (item.color.indexOf(searchText) === 0) {
          results.push({
            name: item.color,
            type: 'color of animal'
          });
        }
      });
    }

    return results;
  }
});
    </script>
    
  </body>
  
</html>
