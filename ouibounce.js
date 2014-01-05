// (function ouibounce() {

//   $('html').on('mouseout.ouibounce', function(e) {

//     function showModal() {
//       $('#ouibounce-modal').modal();
//     }


//     if (!(e.clientY < 20)) return;

//     showModal();
//     $('html').off('mouseout.ouibounce');
//   });

// })();


(function ouibounce() {

  $('html').on('mouseout.ouibounce', (function() {
    function showModal() {
      $('#ouibounce-modal').modal();
    }
    return function(e) {
      if (!(e.clientY < 20)) return;
      
      showModal();
      $('html').off('mouseout.ouibounce');
    };
  })() );

})();
