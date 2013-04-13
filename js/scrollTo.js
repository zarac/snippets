/**
 * Scroll to an element.
 *  The 'animated' and 'pulse' effects are from animate.css.
 * <
 *  element
 */
function scrollTo(element) {
    $("html, body").stop().animate({ scrollTop: element.offset().top - 5 },
            1000)
    $(element).addClass('animated pulse')
    window.setTimeout(function() {
        $(element).removeClass('pulse')
    }, 1000)
}
