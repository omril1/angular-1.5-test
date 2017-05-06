angular.module('todoApp', ['ui.router', 'ngAnimate'])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('main', {
                url: "",
                templateUrl: "/routes/main.html"
            })
            .state("red", {
                url: "/red",
                templateUrl: "/routes/red.html"
            })
            .state("green", {
                url: "/green",
                templateUrl: "/routes/green.html"
            })
            .state("blue", {
                url: "/blue",
                templateUrl: "/routes/blue.html"
            })
    }]);
