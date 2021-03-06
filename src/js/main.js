$(document).ready(function () {
    $('.slick-answer').slick({
        mobileFirst: true,
        dots: true,
        responsive: [{
            breakpoint: 768,
            settings: 'unslick'
        }]
    })
    $('.slick-sale').slick({
        dots: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [{
            breakpoint: 769,
            settings: {
                vertical: false,
                verticalSwiping: false
            }
        }]
    })
    $('.slick-photo').slick({
        mobileFirst: true,
        dots: true,
        rows: 2,
        slidesToShow: 2,
        responsive: [{
            breakpoint: 768,
            settings: 'unslick'
        }]
    })
    $('.slick-gallery').slick({
        mobileFirst: true,
        dots: true,
        rows: 3,
        slidesToShow: 2,
        responsive: [{
            breakpoint: 768,
            settings: 'unslick'
        }]
    })
    $('.slick-reviews').slick({
        dots: true,
        slidesToShow: 2,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    })
})

$(document).ready(function () {
    $('.text-toggle').click(function () {
        $(this).siblings('.item__footer').toggleClass('hide');
        if ($(this).siblings('.item__footer').hasClass('hide')) {
            $(this).html('Показать полностью');
        } else {
            $(this).html('Скрыть');
        }
        return false;
    });
})

$(document).ready(function () {
    $('.main-footer__mobile-menu li a').on('click', function () {
        $(this).siblings('.submenu').slideToggle();
    })
})

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    // responsive: [{
    //     breakpoint: 768,
    //     settings: {
    arrows: true,
    // prevArrow: $('.slick-prev'),
    // nextArrow: $('.slick-next'),
    //     }
    // }]
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 768,
        settings: 'unslick',
    }]
});

// tabs
$(document).ready(function () {
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
})

$(document).ready(function () {
    $('.answer-show').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings().slideToggle('medium', function () {
            if ($(this).is(':visible'))
                $(this).css('display', 'flex');
        });
    })
})

// mobile-menu
$(document).ready(function () {
    $('.burger').on('click', function () {
        $('.mobile-menu').slideToggle();
    })
    $('.mobile-menu .closed').on('click', function () {
        $('.mobile-menu').slideToggle();
    })
    $(window).scroll(function () {
        $('.mobile-menu').css('display', 'none');
    })
})

// picture hero
$(document).ready(function () {
    $('.show-picture-1').hover(function () {
        $('.main-hero').css('backgroundImage', 'url("../images/main-hero.jpg")')
        $('.main-hero__rectangle h2').text('LAMPSTORY')
        $('.main-hero__rectangle p').text('СКИДКА 50% НА ВСЕ БЕСПРОВОДНЫЕ НОЧНИКИ')
    })
    $('.show-picture-2').hover(function () {
        $('.main-hero').css('backgroundImage', 'url("../images/main-hero-2.jpg")')
        $('.main-hero__rectangle h2').text('текст2')
        $('.main-hero__rectangle p').text('Статья2')
    })
    $('.show-picture-3').hover(function () {
        $('.main-hero').css('backgroundImage', 'url("../images/main-hero-3.jpg")')
        $('.main-hero__rectangle h2').text('текст3')
        $('.main-hero__rectangle p').text('Статья3')
    })
    $('.show-picture-4').hover(function () {
        $('.main-hero').css('backgroundImage', 'url("../images/main-hero-4.jpg")')
        $('.main-hero__rectangle h2').text('текст4')
        $('.main-hero__rectangle p').text('Статья4')
    })
    $('.show-picture-5').hover(function () {
        $('.main-hero').css('backgroundImage', 'url("../images/main-hero-5.jpg")')
        $('.main-hero__rectangle h2').text('текст5')
        $('.main-hero__rectangle p').text('Статья5')
    })
})

$(document).ready(function () {
    $('#filters').on('click', function () {
        $('.aside').toggle();
        $('.main-filter').toggleClass('active');
    })
    $('#toggle-list').on('click', function() {
        $(this).toggleClass('active');
        $('#toggle-list ul.submenu').toggleClass('active');
    })
})