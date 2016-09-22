angular.module('myApp', [
	'ngRoute'
])

.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainCtrl'
        })
        .when('/events', {
            templateUrl : 'pages/events.html',
            controller  : 'eventsCtrl'
        })
        .when('/federation', {
            templateUrl : 'pages/federation.html',
            controller  : 'federationCtrl'
        })
        .when('/gallery', {
            templateUrl : 'pages/gallery.html',
            controller  : 'galleryCtrl'
        })
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactCtrl'
        })
        .otherwise({ redirectTo: '/' });

    // $locationProvider.html5Mode(true);
});