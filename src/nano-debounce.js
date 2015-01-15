// prevents binding the view changes back to the model 
// if the view has a `oneway` attribute/property
module.exports = function(options) {
  var timeouts = {};
  return function(nano) {
    nano.hook('view:change', function(o, next) {
      if (o.view.debounce) {
        if (timeouts[o.view.id]) {
          clearTimeout(timeouts[o.view.id]);
        }
        timeouts[o.view.id] = setTimeout(next, o.view.debounce);
      } else {
        next();
      }
    });
  };
};
