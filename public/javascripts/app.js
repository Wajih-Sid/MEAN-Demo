var myApp = angular.module('Multivision',['ngRoute','ngResource']);

myApp.config(function ($routeProvider,$locationProvider)
{
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

   $routeProvider.when('/',
       {
           templateUrl:'/views/partials/index.jade',
           controller:'mainCtrl'
       })
});

