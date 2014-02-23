var should = require('should'),
    Zombie = require('zombie'),
    path   = require('path');

var browser        = new Zombie(),
    test_page_path = 'file://' + path.join(__dirname, 'index.html');

describe('Performs basic OuiBounce functionality', function() {
  it('should be present');
});
