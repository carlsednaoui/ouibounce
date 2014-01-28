$.fn.ouibounce = function(config) {
  var sensitivity = config.sensitivity || 20,
      _this       = this;
  
  $('html').on('mouseout.ouibounce', function(e) {
    if (!(e.clientY < sensitivity)) return;
    _this.show();
    $('html').off('mouseout.ouibounce');
  });
};