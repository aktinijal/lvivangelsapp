
angular.module('myApp')

.controller('mainCtrl', function($scope){
	//for slick-slider responsivenes
	$scope.breakpoints= [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        }
    ];

    $scope.slides = [
    	{src: 'img/about4.jpg', description: 'img1'},
    	{src: 'img/about2.jpg', description: 'img2'},
    	{src: 'img/about3.jpg', description: 'img3'},
    	{src: 'img/about1.jpg', description: 'img4'}
    ]

});