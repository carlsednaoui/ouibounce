function ouibounce(el, custom_config) {
  "use strict";

  var config     = custom_config || {},
    aggressive   = config.aggressive || false,
    sensitivity  = setDefault(config.sensitivity, 20),
    scrollSpeed  = setDefault(config.scrollSpeed, 1000),
    timer        = setDefault(config.timer, 1000),
    delay        = setDefault(config.delay, 0),
    callback     = config.callback || function() {},
    cookieExpire = setDefaultCookieExpire(config.cookieExpire) || '',
    cookieDomain = config.cookieDomain ? ';domain=' + config.cookieDomain : '',
    cookieName   = config.cookieName ? config.cookieName : 'viewedOuibounceModal',
    sitewide     = config.sitewide === true ? ';path=/' : '',
    _delayTimer  = null,
    _scrollTimer = null,
    _scrollTime  = new Date().getTime(),
    _scrollY     = window.scrollY,
    _html        = document.documentElement;

  function setDefault(_property, _default) {
    return typeof _property === 'undefined' ? _default : _property;
  }

  function setDefaultCookieExpire(days) {
    // transform days to milliseconds
    var ms = days*24*60*60*1000;

    var date = new Date();
    date.setTime(date.getTime() + ms);

    return "; expires=" + date.toUTCString();
  }

  setTimeout(attachOuiBounce, timer);
  function attachOuiBounce() {
    if (isDisabled()) { return; }

    _html.addEventListener('mouseleave', handleMouseleave);
    _html.addEventListener('mousemove', handleMousemove);
    _html.addEventListener('keydown', handleKeydown);
    window.addEventListener('scroll', handleScroll);
  }

  function fireDelayed() {
    if (!_delayTimer) {
      _delayTimer = setTimeout(fire, delay);
    }
  }

  function abortFire() {
    if (_delayTimer) {
      clearTimeout(_delayTimer);
      _delayTimer = null;
    }
  }

  function handleMouseleave(e) {
    if (e.clientY <= sensitivity) {
      fireDelayed();
    }
  }

  function handleMousemove() {
    abortFire();
  }

  function handleKeydown(e) {
    if(e.metaKey && e.keyCode === 76) {
      fireDelayed();
    } else {
      abortFire();
    }
  }

  function handleScroll() {
      if (!_scrollTimer) {
        var scrollTime = new Date().getTime(),
          scrollY      = window.scrollY;
        _scrollTimer = setTimeout(function() {
          _scrollTime = scrollTime;
          _scrollY = scrollY;
          _scrollTimer = null;
        }, 10);
      }
      if (window.scrollY <= 0) {
        if ((_scrollY - window.scrollY) / (new Date().getTime() - _scrollTime + 1) * 1000 >= scrollSpeed) {
          fireDelayed();
        }
      } else {
        abortFire();
      }
  }

  function checkCookieValue(cookieName, value) {
    return parseCookies()[cookieName] === value;
  }

  function parseCookies() {
    // cookies are separated by '; '
    var cookies = document.cookie.split('; ');

    var ret = {};
    for (var i = cookies.length - 1; i >= 0; i--) {
      var el = cookies[i].split('=');
      ret[el[0]] = el[1];
    }
    return ret;
  }

  function isDisabled() {
    return checkCookieValue(cookieName, 'true') && !aggressive;
  }

  // You can use ouibounce without passing an element
  // https://github.com/carlsednaoui/ouibounce/issues/30
  function fire() {
    if (isDisabled()) { return; }

    if (el) { el.style.display = 'block'; }

    callback();
    disable();
  }

  function disable(custom_options) {
    var options = custom_options || {};

    // you can pass a specific cookie expiration when using the OuiBounce API
    // ex: _ouiBounce.disable({ cookieExpire: 5 });
    if (typeof options.cookieExpire !== 'undefined') {
      cookieExpire = setDefaultCookieExpire(options.cookieExpire);
    }

    // you can pass use sitewide cookies too
    // ex: _ouiBounce.disable({ cookieExpire: 5, sitewide: true });
    if (options.sitewide === true) {
      sitewide = ';path=/';
    }

    // you can pass a domain string when the cookie should be read subdomain-wise
    // ex: _ouiBounce.disable({ cookieDomain: '.example.com' });
    if (typeof options.cookieDomain !== 'undefined') {
      cookieDomain = ';domain=' + options.cookieDomain;
    }

    if (typeof options.cookieName !== 'undefined') {
      cookieName = options.cookieName;
    }

    document.cookie = cookieName + '=true' + cookieExpire + cookieDomain + sitewide;

    // remove listeners
    _html.removeEventListener('mouseleave', handleMouseleave);
    _html.removeEventListener('mousemove', handleMousemove);
    _html.removeEventListener('keydown', handleKeydown);
    window.removeEventListener('scroll', handleScroll);
  }

  return {
    fire: fire,
    disable: disable,
    isDisabled: isDisabled
  };
}

/*exported ouibounce */
