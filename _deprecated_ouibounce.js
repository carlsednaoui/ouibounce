(function ouibounce() {
  var direction        = null,
          lastY        = null,
          triggered    = false,
          windowHeight = window.innerHeight,
          lastTime     = new Date().getTime();
          scrolling    = false;

  //- display modal or alert message
  function showModal(text) {
    if (triggered === false) {
      console.log(text);
      alert(text);
      triggered = true;
    }
  }

  $('html').on('mousemove', function(event) {
    //- ensure mouse is going up
    if (event.pageY < lastY) {
      direction = 'up';
    } else {
      direction = null;
    }

    //- check if mouse is passing top 10px
    //- relative to the current window position
    //- ensure that mouse is moving upwards
    if (event.pageY < (document.body.scrollTop + 10) && direction == 'up') {
      showModal('passed top 10');
    }

    //- make sure user is moving mouse
    //- not just scrolling
    window.onscroll = function(event) {
      scrolling = true;
    };

    //- check if mouse is intending to exit by calculating
    //- mouse velocity and comparing it to browser size. 
    //- the "125" is arbitrary and provided good results locally.
    var now      = new Date().getTime(),
        time     = now - lastTime;
        distance = lastY - event.pageY;
    
    var velocity = distance / time;

    if (direction == "up" 
        && velocity > (windowHeight / 125)
        && scrolling === false) {
      showModal('mouse is moving fast ' + velocity);
    }

    //- update mouse position
    //- reset scrolling
    //- update lastTime
    lastY     = event.pageY;
    scrolling = false;
    lastTime  = now;
  });
})();

// Old
// if (Math.abs(lastY - event.pageY) > 45
//     && direction == 'up' 
//     && scrolling === false) {
//   showModal('mouse is moving fast');
// }