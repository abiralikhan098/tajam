$(function () {

    /*preloader start*/
    $(window).on("load", function () {
        $(".loader").fadeOut(800);

    });
    /*preloader end*/

    /*navbar start*/
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 50) {
            $(".navbar").removeClass("sticky");
        } else {
            $(".navbar").addClass("sticky");
        }
    });
    /*navbar end*/

    /*slider start*/
    $('.banner_slider').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        nextArrow: '.left_arrow',
        prevArrow: '.right_arrow',
    });
    /*slider end*/

    /*slider start*/
    $('.test_slider').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        nextArrow: '.left_arrow',
        prevArrow: '.right_arrow',
    });
    /*slider end*/

    /*venobox start*/
    $(document).ready(function () {
        $('.venobox').venobox();
    });

    /*venobox end*/

    /*mixup start*/
    var mixer = mixitup('.gellery_img');
    /*mixup end*/

    /*smooth scroll start*/
    var scroll = new SmoothScroll('a[href*="#"]');
    /*smooth scroll end*/

    /*aos start*/
    AOS.init();
    /*aos end*/

    /*back to top button start*/
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    /*back to top button end*/

    /*navbar mobile view*/
    $('.navbar-toggler').click(function () {
        $('.navbar').toggleClass('click_nav');
    });
    /*navbar mobile view*/


});
