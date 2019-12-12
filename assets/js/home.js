
$(document).ready(function(){
    //Features//

    $(".feature-body").mouseenter(function(){
        $(this).find(".round").removeClass("d-none").addClass("d-block")

    })
    $(".feature-body").mouseleave(function(){
        $(this).find(".round").removeClass("d-block").addClass("d-none")
    });
    $("#service-slider").owlCarousel();
})
//About Us//
$(".slider").slick({
    infinity:true,
    slidesToShow:6,
    slidesToScroll:1
})