var app = angular.module('myApp', [
	'ngRoute',
    'slick'
])

app.config(function ($routeProvider) {
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
app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 100) {
                 scope.boolChangeClass = true;
                 console.log('Scrolled below header.');
             } else {
                 scope.boolChangeClass = false;
                 console.log('Header is in view.');
             }
            scope.$apply();
        });
    };
});
app.controller('eventsController', function($scope) {
  $scope.box1 = $scope.box2 = $scope.box3 = true;
});
    
app.directive('slideToggle', function() {  
  return {
    restrict: 'A',      
    scope:{
      isOpen: "=slideToggle" // 'data-slide-toggle' in our html
    },  
    link: function(scope, element, attr) {
      var slideDuration = parseInt(attr.slideToggleDuration, 10) || 200;      
      
      // Watch for when the value bound to isOpen changes
      // When it changes trigger a slideToggle
      scope.$watch('isOpen', function(newIsOpenVal, oldIsOpenVal){
        if(newIsOpenVal !== oldIsOpenVal){ 
          element.stop().slideToggle(slideDuration);
        }
      });
      
    }
  };  
});