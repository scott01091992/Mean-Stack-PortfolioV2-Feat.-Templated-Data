myApp.config(function ($routeProvider){
  $routeProvider
    .when('/landing',{
      templateUrl: '../partials/landing.html'
    })
    .otherwise({
      redirectTo: '/landing'
    })
});
