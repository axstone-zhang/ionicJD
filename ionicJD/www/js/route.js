//总路由模块
angular.module('route', ['guidePage.route','home.route','tabs.route'])


.config(function($stateProvider, $urlRouterProvider) {

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
