
$(document).ready(function () {
    //Features//

    $(".feature-body").mouseenter(function () {
        $(this).find(".round").removeClass("d-none").addClass("d-block")

    })
    $(".feature-body").mouseleave(function () {
        $(this).find(".round").removeClass("d-block").addClass("d-none")
    });
    $("#service-slider").owlCarousel();


    //Client slider

    $('.regular').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1
    });

    $(window).scroll(function(){
        a = $(window).scrollTop()
        if (a>100){
            $('.navbar').addClass('fixed-top')
        }else{
            $('.navbar').removeClass('fixed-top')
        }
    })
})
//About Us//
// $(".slider").slick({
//     infinity:true,
//     slidesToShow:6,
//     slidesToScroll:1
// })