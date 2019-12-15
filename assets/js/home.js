
$(document).ready(function () {
   //alert
   $(".alert-hidden").click(function(){
$(".alertarea").addClass("d-none")

   })

   
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
        autoplay:true,
        slidesToShow: 6,
        slidesToScroll: 1

 });
    //Client slider

    $('.regular').slick({
        arrows: false,
        autoplay:true,
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
        $(".card-blog img").hover(function(){
            $("link-blog").css("top","30%")
        })  

        //Isotope plugin
    $('.text-center').on('click', 'a', function (e) {
        e.preventDefault()
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        // filterValue = filterFns[ filterValue ] || filterValue;
        $(".grid").isotope({ filter: filterValue });
    });
    // Student-slide
//     $('.carusel-item').slick({
//         arrows: true,
//         autoplay:falsr,
//         slidesToShow: 2,
//         slidesToScroll: 1

//  });

})

//About Us//
// $(".slider").slick({
//     infinity:true,
//     slidesToShow:6,
//     slidesToScroll:1
// })


$('.regularcc').slick({
    arrows: false,
    autoplay:true,
    slidesToShow: 2,
    slidesToScroll: 1
});