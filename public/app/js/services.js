/*global angular:false*/

angular.module('myApp')
    .factory('Authenticate', function ($resource) {
        "use strict";
        return $resource("/service/authenticate/");
    })
    .factory('Movies', function ($resource) {
        "use strict";
        return $resource("/service/movies");
    })
    .factory('Flash', function ($rootScope) {
        "use strict";
        return {
            show: function (message) {
                $rootScope.flash = message;
            },
            clear: function () {
                $rootScope.flash = "";
            }
        };
    });
    