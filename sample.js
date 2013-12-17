console.log('starting....');

function ouibounce() {
  var direction = null,
          lastY = null,
          fired = false;

  // display modal or alert message
  function showModal(text) {
    if (fired === false) {
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

    // check if mouse is intending to exit
    // look at mouse speed and mouse direction
    if (Math.abs(lastY - event.pageY) > 70 && direction == 'up') {
      showModal('mouse is moving fast');
    }


    // update mouse position
    lastY = event.pageY;
  });
}

ouibounce();
