angular.module('guidePage.controller', [])

  .controller('GuidePageCtrl', function($scope) {

    //引导页slide初始化
    var guideSlide = new Swiper('#guideSlide',{
      pagination: '.swiper-pagination',
      onSlideChangeEnd: function(swiper){
        var index = guideSlide.activeIndex+1;
        if(index==2||index==3){
          var item = $("#tips-"+index);
          if(item.hasClass("hidden")){
            item.removeClass("hidden");
            item.addClass("guide-show");
          }
        }
      }
    });

    //调转到首页面
    document.getElementById("close").addEventListener("click",function(event){
      localStorage["isFirst"] = true;
      $state.go('tab.home');
    },false);

  });

