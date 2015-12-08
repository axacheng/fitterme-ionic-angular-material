'use strict';
angular.module('piknikoApp')

.controller('SideNavCtrl', function ($scope, $state, $timeout, $mdSidenav, $log, $window) {
    $scope.toggleLeft = buildDelayedToggler('left');
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };

    $scope.goBack = function(){
    	$window.history.back();
    }

    
  })
.controller('FindPlaceCtrl', function ($scope, $state, $stateParams, $window) {
    $scope.cities = [
	    {city:'Taipei',image:'http://www.gapyearfamily.com/wp-content/uploads/2015/06/Taipei-with-kids-3.jpg'}, 
	    {city:'Tokyo',image:'http://www.japan-guide.com/blog/sakura14/g/140326_tokyo_01.jpg'},
	    {city:'Singapore',image:'http://media-cdn.tripadvisor.com/media/photo-s/02/59/da/1f/marina-barrage.jpg'},
	    {city:'London',image:'http://i.telegraph.co.uk/multimedia/archive/01858/London-Picnic_1858327c.jpg'},
	    {city:'Paris',image:'http://www.parisbyfoot.com/2014test/wp-content/uploads/2015/04/4-5-15-picnic2.jpg'},
    ]

    $scope.gothecity = function(c){
    	$state.go('city', { "city": c.city})
    }

    $scope.city = $stateParams.city

    $scope.places = [
    	{name:'擎天岡', image:'https://placeimg.com/500/300/any', review:'4.5', setFav:true},
    	{name:'大安森林公園', image:'https://placeimg.com/500/300/any', review:'4.5',setFav:false},
    	{name:'大佳河濱公園', image:'https://placeimg.com/500/300/any', review:'4.5', setFav:false},
    	{name:'花博公園', image:'https://placeimg.com/500/300/any', review:'4.5', setFav:false},
    ]


    $scope.contentSize = function(index) {
      var value = index + 3
      if (value % 3 ===0 ){
        $scope.ContentWidth = 100;
      } else {
        $scope.ContentWidth = 50;
      }
    }



    $scope.toggleFav = function(index, reason) {
    	var fav_or_not = $scope.places[index].setFav;
    	$scope.places[index].setFav = !$scope.places[index].setFav;
    }

    $scope.gotheplace = function(p, city){
      console.log (p)
      $window.localStorage.setItem('image', p.image);
      $window.localStorage.setItem('review', p.review);
    	$state.go('place', { "city": city, "place": p.name})
    }

    $scope.place = $stateParams.place;
    $scope.sportImages = ['http://static.ettoday.net/images/466/d466951.jpg',
    'https://c2.staticflickr.com/8/7024/6852146761_621313d5bf_z.jpg',
    'http://static.flickr.com/30/62747513_23424e34b9.jpg']

    $scope.zoomIn = function(index) {
      console.log(index)
    }

    var imageUrl = $window.localStorage.getItem('image');
    $scope.review = $window.localStorage.getItem('review');
    $('.header').css({'background-image': 'url(' + imageUrl + ')'})

    $('#wrapper').scroll(function(){
      if ($(this).scrollTop() > 70 && $(this).scrollTop() < 200 ){
        $('.header').addClass("medium");
      }

      else if ($(this).scrollTop() > 200 ){  
        $('.header').addClass("smaller");
        $('.placename').addClass("textalignc");
      }
      
      else{
        $('.header').removeClass("medium");
        $('.header').removeClass("smaller");
        $('.header').addClass('bgImg');
        $('.header').css({'background-image': 'url(' + imageUrl + ')'});
        $('.placename').removeClass('textalignc');

      }
    })

  })



