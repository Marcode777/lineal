var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', 
  function($scope, $http){
    console.log("Hello world from this controller!");

   $scope.addContact = function(){
    console.log($scope.contact);
    $http.post('/lineal_db', $scope.contact).success(function(response){
      console.log(response);
      refresh();
    })
   }

  }]);