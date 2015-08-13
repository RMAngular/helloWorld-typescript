namespace app.components.container {
    'use strict';

    interface IContainerScope {
        title: string;
        color: string;
    }

    class Container implements ng.IDirective {
        static $inject: Array<string> = [];
        constructor() { }

        static instance(): ng.IDirective {
            return new Container();
        }

        scope: IContainerScope = {
            title: '@',
            color: '@'
        }
        templateUrl: string = 'app/components/container/container.html';
        restrict: string = 'E';
        controller: typeof ContainerController = ContainerController;
        controllerAs: string = 'vm';
        bindToController: boolean = true;
        transclude: boolean = true;
    }

    class ContainerController {
        color: string;
        wColor: string;
        showContent: boolean;

        static $inject: Array<string> = [];
        constructor() {
            this.wColor = 'w' + this.color;
            this.showContent = true;
        }
    }

    angular
        .module('app.components.container')
        .directive('htContainer', Container.instance);
}
