var stringify_without_cycles = function(obj) {
    var seen = [];
    return JSON.stringify(obj, function(key, val) {
        if (typeof val === 'object' && val !== null) {
            if (seen.indexOf(val) >= 0) {
                return '!cyclic!';
            }
            seen.push(val);
        }
        return val;
    });
}
