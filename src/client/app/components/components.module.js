var app;
(function (app) {
    var components;
    (function (components) {
        'use strict';
        angular.module('app.components', [
            'app.components.container',
            'app.components.news',
            'app.components.people'
        ]);
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
//# sourceMappingURL=components.module.js.map