var app;
(function (app) {
    var dashboard;
    (function (dashboard) {
        'use strict';
        angular
            .module('app.dashboard')
            .config(configureStates);
        configureStates.$inject = ['$stateProvider'];
        /* @ngInject */
        function configureStates($stateProvider) {
            var states = getStates();
            states.forEach(function (state) {
                $stateProvider.state(state.state, state.config);
            });
        }
        function getStates() {
            var route = [
                {
                    state: 'dashboard',
                    config: {
                        url: '/',
                        templateUrl: 'app/features/dashboard/dashboard.html',
                        controller: 'DashboardController',
                        controllerAs: 'vm',
                        title: 'dashboard',
                        settings: {
                            nav: 1,
                            content: '<i class="fa fa-dashboard"></i> Dashboard'
                        },
                        resolve: {
                            messageCount: messageCount,
                            people: people,
                            news: news
                        }
                    }
                }
            ];
            messageCount.$inject = ['dataservice'];
            function messageCount(dataservice) {
                return dataservice.getMessageCount();
            }
            people.$inject = ['dataservice'];
            function people(dataservice) {
                return dataservice.getPeople();
            }
            function news() {
                return {
                    title: 'helloWorld',
                    description: 'Hot Towel Angular is a SPA template ' +
                        'for Angular developers.'
                };
            }
            return route;
        }
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));
//# sourceMappingURL=dashboard.route.js.map