var page = $('html, body');
$('a[href*="#"]').click(function() {
    page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

$(document).ready(function() {
    $('.slide-ru').vegas({
        slides: [
            { src: './src/img/slide-1.png' },
            { src: './src/img/slide-2.png' },
            { src: './src/img/slide-3.png' },
            { src: './src/img/slide-4.png' },
            { src: './src/img/slide-5.png' },
        ]
    });

    $('.slide-ua').vegas({
        slides: [
            { src: '../src/img/slide-1.png' },
            { src: '../src/img/slide-2.png' },
            { src: '../src/img/slide-3.png' },
            { src: '../src/img/slide-4.png' },
            { src: '../src/img/slide-5.png' },
        ]
    });
});


$(document).ready(function() {
    $('.buttons-wrap .btn-red.no-demo').click( function(event){
        event.preventDefault();
        $('form input[name="product"]').val($(this).attr("data-product"));
        $('#overlay').fadeIn(400,
            function(){
                $('#modal-1')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
        });
    });

    $('#modal_close, #overlay').click( function(){
        $('#modal-1')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });

    $('.buttons-wrap .btn-green').click( function(event){
        event.preventDefault();
        $('form input[name="product"]').val($(this).attr("data-product"));
        $('#overlay-2').fadeIn(400,
            function(){
                $('#modal-2')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });
    $('#modal_close-2, #overlay-2').click( function(){
        $('#modal-2')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay-2').fadeOut(400);
                }
            );
    });

    $('.buttons-wrap .btn-red.demo').click( function(event){
        event.preventDefault();
        $('form input[name="product"]').val($(this).attr("data-product"));
        $('#overlay-3').fadeIn(400,
            function(){
                $('#modal-3')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });
    $('#modal_close-3, #overlay-3').click( function(){
        $('#modal-3')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay-3').fadeOut(400);
                }
            );
    });

});

var phone = $(".phone");
phone.keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        return false;
    }
});

var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

jQuery(document).ready(function($) {
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
            {
                breakpoint: 850,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
});

$('.moreless-button-1').click(function() {
    $('.moretext-1').slideToggle();
});

$('.moreless-button-2').click(function() {
    $('.moretext-2').slideToggle();
});

$('.moreless-button-3').click(function() {
    $('.moretext-3').slideToggle();
});

$('.moreless-button-4').click(function() {
    $('.moretext-4').slideToggle();
});