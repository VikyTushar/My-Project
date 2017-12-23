var app = angular.module("myApp",[]);

app.controller("myCtrl", function($scope){
    $scope.firstName="Tushar";
    $scope.lastName ="Dattu";
    $scope.fullName = function(){
        return $scope.firstName + ' ' + $scope.lastName;
};
});