$(document).ready(function() {
    // Smooth scroll to anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 65 // Adjusted scroll offset
            }, 1000);
        }
    });
});
