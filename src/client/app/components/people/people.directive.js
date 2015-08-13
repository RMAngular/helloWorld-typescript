var app;
(function (app) {
    var components;
    (function (components) {
        var people;
        (function (people) {
            'use strict';
            var People = (function () {
                function People() {
                    this.scope = {
                        people: '='
                    };
                    this.templateUrl = 'app/components/people/people.html';
                    this.restrict = 'E';
                    this.controller = PeopleController;
                    this.controllerAs = 'vm';
                    this.bindToController = true;
                }
                People.instance = function () {
                    return new People();
                };
                People.$inject = [];
                return People;
            })();
            var PeopleController = (function () {
                function PeopleController() {
                    this.clickPerson = function (person) {
                        window.alert(JSON.stringify(person));
                    };
                }
                PeopleController.$inject = [];
                return PeopleController;
            })();
            angular
                .module('app.components.people')
                .directive('htPeople', People.instance);
        })(people = components.people || (components.people = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
//# sourceMappingURL=people.directive.js.map