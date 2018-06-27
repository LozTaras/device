(function() {
  var services = document.body.querySelectorAll('.services-list > li');
  var servicesBtns = document.body.querySelectorAll('.services-control button');

  for(var i = 0; i < servicesBtns.length; i++) {
    var btn = servicesBtns[i];

    btn.addEventListener('click', function(evt) {
      deactivateAll();

      this.classList.add('services-active');

      var btnNum = this.dataset.servicesNum;

      services[btnNum].classList.add('current-show');
    });
  }

  function deactivateAll() {
    for(var i = 0; i < services.length; i++) {
      var service = services[i];
      service.classList.remove('current-show');
    }

    for(var i = 0; i < servicesBtns.length; i++) {
      var btn = servicesBtns[i];
      btn.classList.remove('services-active');
    }
  }
})();
