namespace app.components.news {
    'use strict';

    interface INewScope {
        news: string;
    }

    class News implements ng.IDirective {
        static $inject: Array<string> = [];
        constructor() { }

        static instance(): ng.IDirective {
            return new News();
        }

        scope: INewScope = {
            news: '='
        };
        templateUrl: string = 'app/components/news/news.html';
        restrict: string = 'E';
        controller: typeof NewsController = NewsController;
        controllerAs: string = 'vm';
        bindToController: boolean = true;
    }

    class NewsController {
        static $inject: Array<string> = [];
        contructor() { }
    }

    angular
        .module('app.components.news')
        .directive('htNews', News.instance);
}
