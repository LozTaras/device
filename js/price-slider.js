(function() {
  var priceSlider = document.body.querySelector('.price-slider');
  var scale = priceSlider.querySelector('.scale');
  var bar = scale.querySelector('.bar');
  var toggleMin = scale.querySelector('.toggle-min');
  var toggleMax = scale.querySelector('.toggle-max');
  var wrapperMin = document.querySelector('.price-indicator-min');
  var wrapperMax = document.querySelector('.price-indicator-max');
  var indicatorMin = document.querySelector('.inner-indicator-min');
  var indicatorMax = document.querySelector('.inner-indicator-max');
  var inputMin = document.querySelector('.price-input-min');
  var inputMax = document.querySelector('.price-input-max');

  toggleMin.onmousedown = function(evt) {
    var scaleCoords = getCoords(scale);
    var toggleMaxCoords = getCoords(toggleMax);
    var toggleMinCoords = getCoords(toggleMin);
    var shihtX = evt.pageX - toggleMinCoords.left;

    moveAt(evt);

    document.onmousemove = function(evt) {
      moveAt(evt);

      return false;
    };

    document.onmouseup = function(evt) {
      document.onmouseup = document.onmousemove = null;
    };

    function moveAt(evt) {
      var newLeft = evt.pageX - shihtX - scaleCoords.left;
      if(newLeft < - 5) {
        newLeft = - 5;
      }
      if(newLeft > toggleMaxCoords.left - scaleCoords.left - toggleMin.offsetWidth) {
        newLeft = toggleMaxCoords.left - scaleCoords.left - toggleMin.offsetWidth;
      }

      bar.style.marginLeft = newLeft + 10 + 'px';
      bar.style.width = (toggleMaxCoords.left + 10 - getCoords(toggleMin).left - 10) + 'px';

      indicatorMin.innerHTML = Math.round(getPrice(newLeft + 5));
      inputMin.value = Math.round(getPrice(newLeft + 5));

      if(newLeft > 14) {
        var left = newLeft - 14;
        if(left > getCoords(wrapperMax).left - scaleCoords.left  - wrapperMin.offsetWidth - 4) {
          left = getCoords(wrapperMax).left - scaleCoords.left  - wrapperMin.offsetWidth - 4;
        }
        wrapperMin.style.left = left + 'px'
      }

      toggleMin.style.left = newLeft + 'px';
    };

    return false;
  };

  toggleMax.onmousedown = function(evt) {
    var scaleCoords = getCoords(scale);
    var toggleMinCoords = getCoords(toggleMin);
    var toggleMaxCoords = getCoords(toggleMax);
    var shihtX = evt.pageX - toggleMaxCoords.left;

    moveAt(evt);

    document.onmousemove = function(evt) {
      moveAt(evt);

      return false;
    };

    document.onmouseup = function(evt) {
      document.onmouseup = document.onmousemove = null;
    };

    function moveAt(evt) {
      var newLeft = evt.pageX - shihtX - scaleCoords.left;
      if(newLeft > (scale.offsetWidth - toggleMax.offsetWidth) +  5) {
        newLeft = (scale.offsetWidth - toggleMax.offsetWidth) +  5;
      }
      if(newLeft < (toggleMinCoords.left - scaleCoords.left) + toggleMin.offsetWidth) {
        newLeft = (toggleMinCoords.left - scaleCoords.left) + toggleMin.offsetWidth;
      }

      bar.style.width = (getCoords(toggleMax).left + 10 - getCoords(toggleMin).left - 10) + 'px';

      indicatorMax.innerHTML = Math.round(getPrice(newLeft - 15));
      inputMax.value = Math.round(getPrice(newLeft - 15));

      var left = newLeft - 14;
      if(left > scale.offsetWidth - wrapperMax.offsetWidth - 5) {
        left = scale.offsetWidth - wrapperMax.offsetWidth - 5;
      }
      if(left < getCoords(wrapperMin).left - scaleCoords.left + wrapperMin.offsetWidth + 4) {
        left = getCoords(wrapperMin).left - scaleCoords.left + wrapperMin.offsetWidth + 4;
      }
      wrapperMax.style.left = left + 'px'

      toggleMax.style.left = newLeft + 'px';
    };

    return false;
  };

  function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + document.documentElement.scrollTop,
      left: box.left + document.documentElement.scrollLeft,
    }
  };

  function getPrice(n) {
    var max = 8978;
    var steps = 167;
    var step = max / steps;
    return step * n;
  }
})();
