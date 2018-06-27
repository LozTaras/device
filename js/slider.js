(function() {
  var slides = document.body.querySelectorAll('.popular-goods-slider > li');
  var sliderBtns = document.body.querySelectorAll('.slider-buttons button');
  var sliderNum = document.body.querySelector('.slider-number');
  var sliderDetails = document.body.querySelector('.slider-details');
  var currentSlide = 0;
  var timerId;

  for(var i = 0; i < sliderBtns.length; i++) {
    var btn = sliderBtns[i];

    btn.addEventListener('click', function(evt) {
      clearInterval(timerId);
      showSlide(this.dataset.sliderNum);
    });
  }

  function showSlide(n) {
    deactivateAll();

    sliderNum.innerHTML = '0' + (+n + 1);
    slides[n].classList.add('current-show');
    sliderBtns[n].classList.add('active-button');
  }

  function deactivateAll() {
    for(var i = 0; i < slides.length; i++) {
      var slide = slides[i];
      slide.classList.remove('current-show');
    }

    for(var i = 0; i < sliderBtns.length; i++) {
      var btn = sliderBtns[i];
      btn.classList.remove('active-button');
    }
  }

  timerId = setInterval(function() {
    currentSlide++;

    if(currentSlide > 2) currentSlide = 0;

    showSlide(currentSlide);
  }, 5000);
})();
