/**
 * Get the closest ancestor matching one of the given selectors.
 * !
 *  jQuery
 * <
 *  jQuery object
 *  Array of CSS selectors (strings)
 */
var get_closest_ancestor = function(e, selectors) {
    if (!Array.isArray(selectors)) return;
    var p = e.parent();
    if (p.length == 0) return;
    for (var i = 0; i < selectors.length; i++)
        if (p.is(selectors[i]))
            return p;
    return get_closest_ancestor(p, selectors);
};

$(function() {
    //* E.g.
    get_closest_ancestor($('div.foo'), ['article', 'section']);
});
