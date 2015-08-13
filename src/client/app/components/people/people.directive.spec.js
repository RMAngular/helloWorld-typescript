/* jshint -W117, -W030 */
(function() {
    'use strict';

    describe('Directive: people', function() {

        var element,
            vm;

        beforeEach(function() {
            bard.appModule('app.components.people');
            bard.inject(
                '$compile',
                '$q',
                '$rootScope',
                '$state',
                '$templateCache'
            );
        });

        beforeEach(function() {
            var html = angular.element('<ht-people></ht-people>');
            $rootScope = $rootScope.$new();
            $templateCache.put('app/components/people/people.html', '');
            element = $compile(html)($rootScope);

            $rootScope.$digest(element);

            vm = element.controller('ht-people');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('Opens the people directive', function () {
            expect(element).to.be.ok();
            expect(vm).to.be.ok();
        });
    });
})();
