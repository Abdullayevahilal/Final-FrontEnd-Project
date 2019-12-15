
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
 //Counter
 var students, courses, teachers, award, j = 0;
    if ($("#statics").length == 1) {
        var statics = $("#statics").position().top;
    };

    $(window).scroll(function (e) {
        if ($("html").scrollTop() > statics - 660) {
            if (j == 0) {
                students = setInterval(function () {
                    if (j > 1800) {
                        clearInterval(students);
                        $("#statics .students").text("1800+");
                    } else {
                        j = j + 2;
                        $("#statics .students").text(j + "+");
                    }
                }, 5);

                courses = setInterval(function () {
                    if (j > 1760) {
                        clearInterval(courses);
                        $("#statics .courses").text("70");
                    } else {
                        j = j + 1;
                        $("#statics .courses").text(Math.round(j / 26));
                    }
                }, 8);

                teachers = setInterval(function () {
                    if (j > 1800) {
                        clearInterval(teachers);
                        $("#statics .teachers").text("700+");
                    } else {
                        j = j + 1;
                        $("#statics .teachers").text(Math.round(j / 2.6) + "+");
                    }
                }, 8);

                award = setInterval(function () {
                    if (j > 1800) {
                        clearInterval(award);
                        $("#statics .award").text("1200+");
                    } else {
                        j = j + 2;
                        $("#statics .award").text(Math.round(j / 1.5) + "+");
                    }
                }, 8);
            }
        }
    })

    if ($("#about-statics").length == 1) {
        var statics = $("#about-statics").position().top;
    };
    $(window).scroll(function (e) {
        if ($("html").scrollTop() > statics - 660) {
            if (j == 0) {
                students = setInterval(function () {
                    if (j > 1798) {
                        clearInterval(students);
                        $("#about-statics .students").text("1800+");
                    } else {
                        j = j + 2;
                        $("#about-statics .students").text(j + "+");
                    }
                }, 3);

                courses = setInterval(function () {
                    if (j > 1749) {
                        clearInterval(courses);
                        $("#about-statics .courses").text("70");
                    } else {
                        j = j + 1;
                        $("#about-statics .courses").text(Math.round(j / 26));
                    }
                }, 8);

                teachers = setInterval(function () {
                    if (j > 1800) {
                        clearInterval(teachers);
                        $("#about-statics .teachers").text("700+");
                    } else {
                        j = j + 1;
                        $("#about-statics .teachers").text(Math.round(j / 2.6) + "+");
                    }
                }, 8);

                award = setInterval(function () {
                    if (j > 1798) {
                        clearInterval(award);
                        $("#about-statics .award").text("1200+");
                    } else {
                        j = j + 2;
                        $("#about-statics .award").text(Math.round(j / 1.5) + "+");
                    }
                }, 8);
            }
        }
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