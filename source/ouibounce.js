$.fn.ouibounce = function() {
  var _this = this;
  $('html').on('mouseout.ouibounce', function(e) {
    if (!(e.clientY < 20)) return;
    _this.show();
    $('html').off('mouseout.ouibounce');
  });
};