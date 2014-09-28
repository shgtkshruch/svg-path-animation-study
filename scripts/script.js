(function() {
  var change_dash, change_duration, change_offset, dash, duration, duration_input, duration_value, length, offset, path, path_animation, reset_button, reset_path, start_button, stroke_dash_input, stroke_dash_value, stroke_offset_input, stroke_offset_value;

  path = document.querySelector('#path path');

  start_button = document.querySelector('#button');

  reset_button = document.querySelector('#reset');

  duration_input = document.querySelector('#js-duration');

  duration_value = document.querySelector('.duration__value');

  stroke_dash_input = document.querySelector('#js-stroke-dasharray');

  stroke_dash_value = document.querySelector('.stroke-dasharray__value');

  stroke_offset_input = document.querySelector('#js-stroke-dashoffset');

  stroke_offset_value = document.querySelector('.stroke-dashoffset__value');

  length = path.getTotalLength();

  length = length.toFixed();

  path.style.strokeDasharray = length;

  path.style.strokeDashoffset = length;

  duration = 2;

  dash = length;

  offset = length;

  path_animation = function() {
    path.style.transition = 'stroke-dashoffset ' + duration + 's ease-in-out';
    return path.style.strokeDashoffset = 0;
  };

  start_button.addEventListener('click', path_animation, false);

  change_duration = function(e) {
    duration = e.target.value;
    return duration_value.innerHTML = duration + 's';
  };

  duration_input.addEventListener('change', change_duration, false);

  reset_path = function() {
    path.style.transition = null;
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    duration_value = '2s';
    stroke_dash_input.value = length;
    stroke_dash_value.innerHTML = length;
    stroke_offset_input.value = length;
    return stroke_offset_value.innerHTML = length;
  };

  reset_button.addEventListener('click', reset_path, false);

  change_dash = function(e) {
    path.style.transition = null;
    dash = e.target.value;
    stroke_dash_value.innerHTML = dash;
    return path.style.strokeDasharray = dash;
  };

  stroke_dash_input.addEventListener('change', change_dash, false);

  change_offset = function(e) {
    path.style.transition = null;
    offset = e.target.value;
    stroke_offset_value.innerHTML = offset;
    return path.style.strokeDashoffset = offset;
  };

  stroke_offset_input.addEventListener('change', change_offset, false);

}).call(this);
