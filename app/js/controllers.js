'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MaverixCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Maverix Theme Guide";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/screen_rulers_glossy.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('AppCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.title = "Maverix Theme";
        $scope.subNav1 = 0;
        $scope.img = "img/iconset-addictive-flavour-set/png/screen_aqua_glossy.png";
        $scope.showTopToggle = false;
    }]);
