let myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);
myApp.config(function($routeProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('/abc', {
            templateUrl: '/views/abc.html',
            controller: 'AlphabetController as vm'
        })
        .otherwise(
            { redirectTo: '/home' }
        );
    
});