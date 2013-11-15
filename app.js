'use strict';

var momSpinnerApp = angular.module('momSpinnerApp', ['momUI']);

momSpinnerApp.controller('SpinnerCtrl', ['$scope', '$timeout', function($scope, $timeout){

    $scope.model = {
        asyncFn: function(params){
            var timeoutPromise =  $timeout(function() {
                var iconEnd = (typeof params ==='undefined') ? 'glyphicon glyphicon-ok-sign' : params['icon-end'];
                return {icon: iconEnd};
            }, 1000);
            console.log(params['cell-name'] + " is spinning");
            return timeoutPromise;
        },
        spinAllCells: function(){
            $scope.$broadcast('startSpinner', {spinnerTag: 'cell'}, {'icon-end': 'glyphicon glyphicon-thumbs-up'});
        },
        spinKevinBacon: function(){
            $scope.$broadcast('startSpinner', {spinnerId: 'KevinBacon'}, {'icon-end': 'glyphicon glyphicon-thumbs-down'});
        }
    }

}]);


