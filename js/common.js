$(document).ready(function () {
    $('.gnb > li').mouseenter(function(){
        $('.snb-bg').show()
        $(this).addClass('on').siblings().removeClass('on')
    })
    $('.gnb > li').mouseleave(function(){
        $('.snb-bg').hide()
        $(this).removeClass('on')
    })

    $('.box-area li div a').mouseenter(function(){
        $(this).parent().parent().addClass('on').siblings().removeClass('on')
    })
    $('.box-area li div a').mouseleave(function(){
        $(this).parent().parent().removeClass('on')
    })
})

function wrapWindowByMask(){
       var maskHeight = $(document).height();
       var maskWidth = $(window).width();
       $("#mask").css({"width":maskWidth,"height":maskHeight});
       $("#mask").fadeTo("slow",0.7);
       $(".window").show();
   }

   $(document).ready(function(){
       $(".openMask").click(function(e){
           e.preventDefault();
           wrapWindowByMask();
       });

       $(".window .close").click(function (e) {
           e.preventDefault();
           $("#mask, .window").hide();
           $('#player iframe').attr("src","");
       });

       $("#mask").click(function () {
           $(this).hide();
           $(".window").hide();
           $('#player iframe').attr("src","");
       });
   });

   $( document ).ready(function() {
      $('.movs a').on('click', function(e) {
       e.preventDefault();
       var $itemx = $(this).parents("dl.movs")
       var $itemx_url = $itemx.find("dd.url iframe").attr("src");
       var $sc_top = $(document).scrollTop();
       var $player_top = $('#player').offset().top

       $('#player iframe').attr("src",$itemx_url + "&autoplay=0");
       $('#player iframe').show();
      });
   });
