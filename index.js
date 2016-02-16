;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory() : typeof define === 'function' && define.amd
      ? define(factory) : global.moment = factory();
}(this, function () {
  'use strict';
  return function asyncReplace (string, search, replacer, done) {
    var re = new RegExp(search);
    var accum = '';
    function loop (remaining) {
      var found = re.exec(remaining);
      if (!found) return done(null, accum + remaining);
      replacer(found, function (err, replacement) {
        if (err) return done(err);
        accum += remaining.substring(0, found.index) + replacement;
        re.lastIndex = 0;
        loop(remaining.substring(found.index + found[0].length));
      });
    }
    loop(string);
  };
}));
