# Async String.prototype.replace()

```javascript
var asyncReplace = require('async-string-replace');
asyncReplace('Hello World', /world/i, function (matches, replace) {
  setTimeout(function () {
    replace(null, 'Node');
  }, 1000);
}, function (err, result) {
  console.log(result);
});
```
