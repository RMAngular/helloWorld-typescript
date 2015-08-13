var app;
(function (app) {
    var dashboard;
    (function (dashboard) {
        'use strict';
        var DashboardController = (function () {
            function DashboardController(logger, messageCount, people, news) {
                this.logger = logger;
                this.messageCount = messageCount;
                this.people = people;
                this.news = news;
                this.title = 'Dashboard';
                logger.info('Activated Dashboard View');
            }
            DashboardController.$inject = ['logger', 'messageCount', 'people', 'news'];
            return DashboardController;
        })();
        dashboard.DashboardController = DashboardController;
        angular
            .module('app.dashboard')
            .controller('DashboardController', DashboardController);
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));
//# sourceMappingURL=dashboard.controller.js.map