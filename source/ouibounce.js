function ouiBounce(el, config) {
  var config      = config || {},
      aggressive  = config.aggressive || false,
      sensitivity = setDefault(config.sensitivity, 20),
      timer       = setDefault(config.timer, 1000),
      callback    = config.callback || function() {};

  setTimeout(attachOuiBounce.bind(el), timer);

  function setDefault(_property, _default) {
    return typeof _property === 'undefined' ? _default : _property;
  }

  function attachOuiBounce() {
    var _this = this,
        _html = document.getElementsByTagName('html')[0];

    _html.addEventListener('mouseout', handleMouseout);

    function handleMouseout(e) {
      if (e.clientY > sensitivity || (getCookieValue('viewedOuibounceModal', 'true') && !aggressive)) return;
      _this.style.display = 'block';
      callback();

      // set cookie and disable mouseout event
      document.cookie = 'viewedOuibounceModal=true';
      _html.removeEventListener('mouseout', handleMouseout);
    }
  }

  function getCookieValue(k, v) {
    // return cookies in an object
    var cookies = document.cookie.split('; ').reduce(function(prev, curr) {
      var el = curr.split('=');
      prev[el[0]] = el[1];

      return prev;
    }, {});

    return cookies[k] === v;
  }
}
