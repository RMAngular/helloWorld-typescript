var app;
(function (app) {
    var components;
    (function (components) {
        var container;
        (function (container) {
            'use strict';
            var Container = (function () {
                function Container() {
                    this.scope = {
                        title: '@',
                        color: '@'
                    };
                    this.templateUrl = 'app/components/container/container.html';
                    this.restrict = 'E';
                    this.controller = ContainerController;
                    this.controllerAs = 'vm';
                    this.bindToController = true;
                    this.transclude = true;
                }
                Container.instance = function () {
                    return new Container();
                };
                Container.$inject = [];
                return Container;
            })();
            var ContainerController = (function () {
                function ContainerController() {
                    this.wColor = 'w' + this.color;
                    this.showContent = true;
                }
                ContainerController.$inject = [];
                return ContainerController;
            })();
            angular
                .module('app.components.container')
                .directive('htContainer', Container.instance);
        })(container = components.container || (components.container = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
//# sourceMappingURL=container.directive.js.map