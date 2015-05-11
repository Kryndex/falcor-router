var clone = require('./util/clone');

/**
 * merges pathValue into a cache
 */
module.exports = function pathValueMerge(cache, pathValue) {
    var path = pathValue.path;
    var curr = cache;
    var next, key, cloned;
    for (var i = 0, len = path.length - 1; i < len; ++i) {
        key = path[i];
        next = curr[key];

        if (!next) {
            next = curr[key] = {};
        }

        curr = next;
    }

    key = path[i];
    cloned = clone(pathValue.value);
    curr[key] = cloned;
    return cache;
};

