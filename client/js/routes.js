myApp.config(function ($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: '../partials/landing.html'
    })
    .otherwise({
      redirectTo: '/'
    })
});
