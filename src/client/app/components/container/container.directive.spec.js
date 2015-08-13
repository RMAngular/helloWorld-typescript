/* jshint -W117, -W030 */
(function() {
    'use strict';

    describe('Directive: container', function() {

        var element,
            vm;

        beforeEach(function() {
            bard.appModule('app.components.container');
            bard.inject(
                '$compile',
                '$q',
                '$rootScope',
                '$state',
                '$templateCache'
            );
        });

        beforeEach(function() {
            var html = angular.element('<ht-container></ht-container>');
            $rootScope = $rootScope.$new();
            $templateCache.put('app/components/container/container.html', '');
            element = $compile(html)($rootScope);

            $rootScope.$digest(element);

            vm = element.controller('ht-container');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('Opens the container directive', function () {
            expect(element).to.be.ok();
            expect(vm).to.be.ok();
        });
    });
})();
