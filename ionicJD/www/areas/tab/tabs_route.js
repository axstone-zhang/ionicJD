//tab路由模块
angular.module('tabs.route', ['tabs.controller'])
  .config(function($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'areas/tab/tabs.html',
        contaoller: 'TabsCtrl'
      })

  });

