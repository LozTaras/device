function initMap() {
  var elem = document.querySelector('.google-map');

  var options = {
    zoom: 17,
    center: { lat: 55.687058, lng: 37.529639 },
  };

  var map = new google.maps.Map(elem, options);

  var marker = new google.maps.Marker({
    position: { lat: 55.687058, lng: 37.529639 },
    map: map,
  });
};

(function() {
  var mapBtn = document.querySelector('.contacts .small-map-btn');
  var map = document.querySelector('.contacts .big-map-modal');
  var closeMapBtn = map.querySelector('.close-btn');

  mapBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    map.classList.toggle('open');
  });

  document.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
      map.classList.remove('open');
    }
  });

  closeMapBtn.addEventListener('click', function() {
    map.classList.remove('open');
  });
})();
