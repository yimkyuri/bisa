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
