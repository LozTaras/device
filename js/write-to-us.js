(function() {
  var modalBtn = document.querySelector('.contacts .write-to-us-bth');
  var modal = document.querySelector('.write-to-us');
  var closemodalBtn = document.querySelector('.write-to-us .close-btn');

  modalBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.toggle('open');
  });

  document.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
      modal.classList.remove('open');
    }
  });

  closemodalBtn.addEventListener('click', function() {
    modal.classList.remove('open');
  });
})();
