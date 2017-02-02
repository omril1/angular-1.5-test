(function () {
    "use strict";
    angular.module('todoApp', ["ngRoute"])
        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "/routes/main.html"
                })
                .when("/red", {
                    templateUrl: "/routes/red.html"
                })
        });
})()