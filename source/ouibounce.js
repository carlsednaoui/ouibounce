$.fn.ouibounce = function(config) {
  var config      = config || {},
      sensitivity = config.sensitivity || 20,
      aggressive = config.aggressive || false,
      _this       = this;
  

  function getCookieValue() {
    // return cookies in an object
    var cookies = document.cookie.split(';').reduce(function(prev, curr) {
      var el = curr.split('=');
      prev[el[0]] = el[1];

      return prev;
    }, {});

    return cookies.viewedOuibounceModal === 'true' ? true : false;
  }


  $('html').on('mouseout.ouibounce', function(e) {
    if (e.clientY > sensitivity || (getCookieValue() && !aggressive)) return;
    _this.show();

    // set cookie and disable mouseout event
    document.cookie = 'viewedOuibounceModal=true';
    $('html').off('mouseout.ouibounce');
  });
};
