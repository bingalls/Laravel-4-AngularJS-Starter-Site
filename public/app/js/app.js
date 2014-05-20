/*global angular:false*/

var myapp = angular.module('myapp', ["ui.router"]);
myapp.config(function ($stateProvider, $urlRouterProvider) {
    "use strict";
    // For any unmatched url, send to /login
    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "app/views/login.html"
        })

        .state('register', {
            url: "/register",
            templateUrl: "app/views/register.html"
        })

        .state('movie', {
            url: "/movie",
            templateUrl: "app/views/movie.html"
        });
});
