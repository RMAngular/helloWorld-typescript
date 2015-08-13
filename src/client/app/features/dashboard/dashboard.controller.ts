namespace app.dashboard {
    'use strict';

    interface IDashboardVm {
        news: { title: string, description: string };
        messageCount: number;
        people: Array<any>;
        title: string;
    }

    export class DashboardController implements IDashboardVm {
        news: { title: string, description: string };
        messageCount: number;
        people: Array<any>;
        title: string;

        static $inject: Array<string> = ['logger', 'messageCount', 'people', 'news'];
        constructor(
            private logger: blocks.logger.Logger,
            messageCount: number,
            people: Array<any>,
            news: { title: string, description: string })
        {
            this.messageCount = messageCount;
            this.people = people;
            this.news = news;
            this.title = 'Dashboard';

            logger.info('Activated Dashboard View');
        }
    }

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
}
