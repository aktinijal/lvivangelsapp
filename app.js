angular.module('myApp', [
	'ngRoute',
    'slick'
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

// .directive('slickSlider', function($timeout){
//     return {
//     restrict: 'A',
//     link: function(scope,element,attrs) {
//         $timeout(function() {
//             $(element).slick(scope.$eval(attrs.slickSlider));
//             });
//         }
//     }
// }); 