/**
 * Generic toggler
 *  Toggles the closest relative within the same article or section, whichever
 *  comes first, matching the selector specified by the clicked element's
 *  data-toggle attribute.
 *  : $('.toggle').on('click', on_toggle);
 *  !
 *   jQuery
 *   get_closest_ancestor
 */
var on_toggle = function() {
    var toggler = $(this);
    var ancestor = get_closest_ancestor(toggler, ['section', 'article']);
    if (!ancestor) return;
    ancestor.find(toggler.data('toggle')).toggle('slow', function() {
        toggler.attr('data-state', $(this).is(':visible'));
    });
};


$(function() {
    //* Hide all initially hidden toggleables.
    $('.toggle[data-state=false]').each(function() {
        on_toggle.call($(this));
    });
    
    //* Bind the event with handler.
    $('body').on('click', '.toggle', on_toggle);
});
