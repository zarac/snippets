/**
 * Autoload Dust.js templates.
 * !
 *  Dust.js
 */
dust.onLoad = function(name, callback) {
    $.get(['views/', '.dust.html'].join(name), function(data) {
        callback(null, data);
    }, 'html').error(function() {
        console.log('Missing template "' + name + '".');
    });
};
