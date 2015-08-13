var app;
(function (app) {
    var components;
    (function (components) {
        var news;
        (function (news) {
            'use strict';
            var News = (function () {
                function News() {
                    this.scope = {
                        news: '='
                    };
                    this.templateUrl = 'app/components/news/news.html';
                    this.restrict = 'E';
                    this.controller = NewsController;
                    this.controllerAs = 'vm';
                    this.bindToController = true;
                }
                News.instance = function () {
                    return new News();
                };
                News.$inject = [];
                return News;
            })();
            var NewsController = (function () {
                function NewsController() {
                }
                NewsController.prototype.contructor = function () { };
                NewsController.$inject = [];
                return NewsController;
            })();
            angular
                .module('app.components.news')
                .directive('htNews', News.instance);
        })(news = components.news || (components.news = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
//# sourceMappingURL=news.directive.js.map