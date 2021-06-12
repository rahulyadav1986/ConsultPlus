$('.main_menu').slicknav({
    label: '',
    prependTo: 'header .bottom',
    closedSymbol: '+',
    openedSymbol: '-',

});

$('#hero-carousel').owlCarousel({
    loop:true,
    dots: false,
    nav:true,
    navText:["<i class='fa fa-chevron-left'><i/>","<i class='fa fa-chevron-right'><i/>"],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('#testimonial-carousel').owlCarousel({
    loop:true,
    dots: true,
    nav:false,
    navText:["<i class='fa fa-chevron-left'><i/>","<i class='fa fa-chevron-right'><i/>"],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});