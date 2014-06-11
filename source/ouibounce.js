function ouibounce(el, config) {
	config = config || {}; // protect against null config
  var aggressive   = config.aggressive || false,
    sensitivity  = setDefault(config.sensitivity, 100),
    timer        = setDefault(config.timer, 1000),
    callback     = config.callback || function() {},
    cookieExpire = setDefaultCookieExpire(config.cookieExpire) || '',
    cookieDomain = config.cookieDomain ? ';domain=' + config.cookieDomain : '',
    sitewide     = config.sitewide === true ? ';path=/' : '',
    _html        = document.getElementsByTagName('html')[0],
	lastY        = -1e10, // really small number so as not to initially block direction check
	listen = function (eventName, fn, isOff, ev) {
			if (_html.addEventListener) {
				ev = isOff ? _html.removeEventListener : _html.addEventListener;

				ev.call(_html, eventName, fn, false);
			}
			// < IE11
			else if (_html.attachEvent) {
				ev = isOff ? _html.detachEvent : _html.attachEvent;

				ev.call(_html, 'on' + eventName, fn);
			}
	}
	;

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
  	listen('mouseleave', handleMouseleave);
  	listen('keydown', handleKeydown);
    listen('mousemove', handleMousemove);
  }

  var debuge = function (e) {
  		console.log({ mscreen: e.screenY, mclient: e.clientY, y: gety(e), l: lastY, event: e.type, e: e });
	};

  function gety(e) {
  	/// <summary>
  	/// Standardize how to get the Y coordinate from a mouse event, so we can easily change it if necessary
  	/// </summary>
  	/// <param name="e">mouse event arg</param>
  	/// <returns type="int">relevant Y-coordinate</returns>
	  
		return e.screenY;
	}

	function handleMousemove(e) {
	  debuge(e);
  	lastY = gety(e); // remember previous Y so we can check direction of leaving
  }

  function handleMouseleave(e) {
  	// skip if:
  	//    * not close enough to top
  	//    * not moving towards the top (negatively Y-axis)
  	//    * we've already viewed it
  	//    * it's not IN YOUR FAAACE
  	debuge(e);
  	var stop = gety(e) > sensitivity || gety(e) >= lastY || (checkCookieValue('viewedOuibounceModal', 'true') && !aggressive);
    if (stop) return;
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
    // You can use ouibounce without passing an element
    // https://github.com/carlsednaoui/ouibounce/issues/30
    if (el) el.style.display = 'block';
    disable();
  }

  function disable(options) {
    var options = options || {};

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

    document.cookie = 'viewedOuibounceModal=true' + cookieExpire + cookieDomain + sitewide;

    // remove listeners
    listen('mouseleave', handleMouseleave, 1);
    listen('keydown', handleKeydown, 1);
    listen('mousemove', handleMousemove, 1);
  }

  return {
    fire: fire,
    disable: disable
  };
}
