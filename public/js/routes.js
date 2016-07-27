angular.module('myRoutes',['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/teas.html',
    controller: 'teasController',
    controllerAs: 'tea'
  })
  .when('/cart',{
    templateUrl: 'views/cart.html',
    controller: 'cartController'
  })
});
