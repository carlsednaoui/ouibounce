console.log('starting....');

function ouibounce() {
  var direction     = null,
          lastY     = null,
          fired     = false,
          scrolling = false;

  // display modal or alert message
  function showModal(text) {
    if (fired === false) {
      console.log(text);
      alert(text);
      fired = true;
    }
  }

  $('html').on('mousemove', function(event) {
    // ensure mouse is going up
    if (event.pageY < lastY) {
      direction = 'up';
    } else {
      direction = null;
    }

    // check if mouse is passing top 10px
    if (event.pageY < 10 && direction == 'up') {
      showModal('passed top 10');
    }

    // make sure user is moving mouse
    // not just scrolling
    window.onscroll = function(event) {
      scrolling = true;
    };

    // check if mouse is intending to exit
    // look at mouse speed and mouse direction
    if (Math.abs(lastY - event.pageY) > 50 
        && direction == 'up' 
        && scrolling === false) {
      showModal('mouse is moving fast');
    }

    // update mouse position
    lastY     = event.pageY;
    scrolling = false;
  });
}

ouibounce();
