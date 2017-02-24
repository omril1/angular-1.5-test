angular.module('todoApp', ['ui.router'])
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
    }]);
