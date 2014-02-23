var should = require('should'),
    Zombie = require('zombie'),
    path   = require('path');

var browser        = new Zombie(),
    test_page_path = 'file://' + path.join(__dirname, 'index.html');

describe('Performs basic OuiBounce functionality', function() {
  before(function(done) {
    _this = this;
    
    browser
      .visit(test_page_path)
      .then(browser.wait.bind(browser)) //bind browser to wait bc it may be out of context
      .then(function() {
        _this.window = browser.document.window;
      })
      .then(done);
  });

  it('should be present', function() {
    should(this.window.ouiBounce).be.type('function');
  });

  it('should fire and drop cookie', function(done) {
    // save window context
    _this = this;

    // ensure cookies are blank
    should(_this.window.document.cookie).be.empty;

    // fire OuiBounce, ensure OuiBouce cookie was dropped
    browser
      .fire('html', 'mouseout')
      .then(function() {
        should(_this.window.document.cookie).eql('viewedOuibounceModal=true');
      })
      .then(done);
  });
});
