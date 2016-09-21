//兼容性配置文件
angular.module('config', [])
  .config(function($ionicConfigProvider){
    $ionicConfigProvider.platform.android.tabs.position("bottom");
    $ionicConfigProvider.platform.ios.tabs.position("bottom");

    $ionicConfigProvider.backButton.text(false).icon("ion-ios-arrow-back");
    $ionicConfigProvider.backButton.previousTitleText(false);
    $ionicConfigProvider.scrolling.jsScrolling(false);
    $ionicConfigProvider.views.maxCache(0);
})


