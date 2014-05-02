

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require,exports,module);
  } else {
    root.ouiBounce = factory();
  }
}(this, function(require,exports,module) {

return function ouiBounce(el, config) {
  var config     = config || {},
    aggressive   = config.aggressive || false,
    sensitivity  = setDefault(config.sensitivity, 20),
    timer        = setDefault(config.timer, 1000),
    callback     = config.callback || function() {},
    cookieExpire = setDefaultCookieExpire(config.cookieExpire) || '',
    _html        = document.getElementsByTagName('html')[0];

  function setDefault(_property, _default) {
    return typeof _property === 'undefined' ? _default : _property;
  }

  function setDefaultCookieExpire(days) {
    // transform days to milliseconds
    var ms = days*24*60*60*1000;

    var date = new Date();
    date.setTime(date.getTime() + ms);

    return "; expires=" + date.toGMTString();
  }

  setTimeout(attachOuiBounce, timer);
  function attachOuiBounce() {
    _html.addEventListener('mouseout', handleMouseout);
    _html.addEventListener('keydown', handleKeydown);
  }

  function handleMouseout(e) {
    if (e.clientY > sensitivity || (checkCookieValue('viewedOuibounceModal', 'true') && !aggressive)) return;
    fire();
    callback();
  }

  var disableKeydown = false;
  function handleKeydown(e) {
    if (disableKeydown || checkCookieValue('viewedOuibounceModal', 'true') && !aggressive) return;
    else if(!e.metaKey || e.keyCode != 76) return;

    disableKeydown = true;
    fire();
    callback();
  }

  function checkCookieValue(cookieName, value) {
    // cookies are separated by '; '
    var cookies = document.cookie.split('; ').reduce(function(prev, curr) {
      // split by '=' to get key, value pairs
      var el = curr.split('=');

      // add the cookie to fn object
      prev[el[0]] = el[1];

      return prev;
    }, {});

    return cookies[cookieName] === value;
  }

  function fire() {
    el.style.display = 'block';
    disable();
  }

  function disable(options) {
    var options = options || {};

    // you can pass a specific cookie expiration when using the OuiBounce API
    // ex: _ouiBounce.disable({ cookieExpire: 5, sitewide: true });
    if (typeof options.cookieExpire !== 'undefined') {
      cookieExpire = setDefaultCookieExpire(options.cookieExpire);
    }

    var sitewide = (options.sitewide === true) ? ';path=/' : '';
    document.cookie = 'viewedOuibounceModal=true' + cookieExpire + sitewide;
    
    // remove listeners
    _html.removeEventListener('mouseout', handleMouseout);
    _html.removeEventListener('keydown', handleKeydown);
  }

  return {
    fire: fire,
    disable: disable
  };
}
;

}));
