    var angelsApp = angular.module('angelsApp', ['ngRoute']);
//, $locationProvider
	angelsApp.config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl : 'pages/home.html',
                    controller  : 'mainController'
                })
                .when('/events', {
                    templateUrl : 'pages/events.html',
                    controller  : 'eventsController'
                })
                .when('/federation', {
                    templateUrl : 'pages/federation.html',
                    controller  : 'federationController'
                })
                .when('/gallery', {
                    templateUrl : 'pages/gallery.html',
                    controller  : 'galleryController'
                })
                .when('/contact', {
                    templateUrl : 'pages/contact.html',
                    controller  : 'contactController'
                })
                .otherwise({ redirectTo: '/' });

            // $locationProvider.html5Mode(true);
    });

    angelsApp.controller('mainController', function($scope) {

        $scope.message = 'Everyone come and see how good I look!';
    });

    angelsApp.controller('eventsController', function($scope) {

        $scope.message = 'eventsController!';
    });

    angelsApp.controller('federationController', function($scope) {

        $scope.message = 'federationController!';
    });

    angelsApp.controller('galleryController', function($scope) {

        $scope.message = 'galleryController!';
    });

    angelsApp.controller('contactController', function($scope) {

        $scope.message = 'contactController!';
    });