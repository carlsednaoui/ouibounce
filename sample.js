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
    // relative to the current window position
    // ensure that mouse is moving upwards
    if (event.pageY < (document.body.scrollTop + 10) && direction == 'up') {
      showModal('passed top 10');
    }

    // make sure user is moving mouse
    // not just scrolling
    window.onscroll = function(event) {
      scrolling = true;
    };

    // check if mouse is intending to exit
    // look at mouse speed and mouse direction
    // over 50px per event emitted == FIRE!
    if (Math.abs(lastY - event.pageY) > 50 
        && direction == 'up' 
        && scrolling === false) {
      showModal('mouse is moving fast');
    }

    // update mouse position
    // reset scrolling
    lastY     = event.pageY;
    scrolling = false;
  });
}

ouibounce();
