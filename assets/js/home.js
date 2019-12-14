
$(document).ready(function () {
    //Features//

    $(".feature-body").mouseenter(function () {
        $(this).find(".round").removeClass("d-none").addClass("d-block")

    })
    $(".feature-body").mouseleave(function () {
        $(this).find(".round").removeClass("d-block").addClass("d-none")
    });
    $("#service-slider").owlCarousel();

    //Catagories
    
 $('.catagories').slick({
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1

 });
    //Client slider

    $('.regular').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1
    });
//Navbar
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