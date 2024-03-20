jQuery(document).ready(function () {
    jQuery("#hamburger-checkbox").prop("checked", false);

    jQuery(".hamburger").change(function () {
        jQuery('.navigation-main').toggleClass('open');
    });

    jQuery('.navigation-main a').click(function () {
        jQuery('.navigation-main').toggleClass('open');
        jQuery("#hamburger-checkbox").prop("checked", false);
    });

    // slider instagram
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        fixedHeight: 500,
        gap: '3em',
        lazyLoad: 'nearby',
        cover: 1,
        pagination: false,
        breakpoints: {
            1400: {
                perPage: 3,
            },
            1024: {
                perPage: 2,
            },
            768: {
                perPage: 1,
            },
        }
    });
    splide.mount();

    /*var splide = new Splide('.splide-second', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        fixedHeight: 500,
        gap: '3em',
        lazyLoad: 'nearby',
        cover: 1,
        pagination: false,
        breakpoints: {
            1400: {
                perPage: 3,
            },
            1024: {
                perPage: 2,
            },
            768: {
                perPage: 1,
            },
        }
    });
    splide.mount();*/

    jQuery(window).scroll(function () {
        if (jQuery(document).scrollTop() > 100) {
            jQuery('.mouse').fadeOut('slow');
        } else {
            jQuery('.mouse').fadeIn('slow');
        }
    });

    
});

//Custom cursor movement
document.addEventListener('DOMContentLoaded', function () {
    var customCursor = document.querySelector('.cursor');

    function moveCursor(e) {
        customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }

    document.addEventListener('mousemove', function (e) {
        requestAnimationFrame(function () {
            moveCursor(e);
        });
    });
});

const options = {
	keyboard: true,
	size: 'fullscreen'
};

document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
	e.preventDefault();
	const lightbox = new Lightbox(el, options);
	lightbox.show();
}));