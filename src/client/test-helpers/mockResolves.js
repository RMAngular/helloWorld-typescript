(function() {
    angular.module('app.resolve.people', [])
        .constant('people', window.mockData.getMockPeople());

    angular.module('app.resolve.messageCount', [])
        .constant('messageCount', 73);

    angular.module('app.resolve.news', [])
        .constant('news', {title:'News title', description: 'News description'});
})();
