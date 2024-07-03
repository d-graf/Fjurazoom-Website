jQuery(document).ready(function () {
    jQuery("#hamburger-checkbox").prop("checked", false);

    jQuery(".hamburger").change(function () {
        jQuery('.navigation-main').toggleClass('open');
    });

    jQuery('.navigation-main a').click(function () {
        jQuery('.navigation-main').toggleClass('open');
        jQuery("#hamburger-checkbox").prop("checked", false);
    });

    jQuery(window).scroll(function () {
        if (jQuery(document).scrollTop() > 100) {
            jQuery('.mouse').fadeOut('slow');
        } else {
            jQuery('.mouse').fadeIn('slow');
        }
    });

    lightbox.option({
        'fitImagesInViewport': true,
    });
    
});

//Custom cursor movement
document.addEventListener('DOMContentLoaded', function () {
    var customCursor = document.querySelector('.cursor');

    function moveCursor(e) {
        customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }

    // Function to check if the device is mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Add the event listeners only if the device is not mobile
    if (!isMobile()) {
        document.addEventListener('mousemove', function (e) {
            requestAnimationFrame(function () {
                moveCursor(e);
            });
        });
    }

    // Optional: Handle window resize events to add/remove event listeners dynamically
    window.addEventListener('resize', function () {
        if (isMobile()) {
            document.removeEventListener('mousemove', moveCursor);
        } else {
            document.addEventListener('mousemove', function (e) {
                requestAnimationFrame(function () {
                    moveCursor(e);
                });
            });
        }
    });
});