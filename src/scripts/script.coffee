path = document.querySelector '#path path'
start_button = document.querySelector '#button'
reset_button = document.querySelector '#reset'
duration_input = document.querySelector '#js-duration'
duration_value = document.querySelector '.duration__value'
stroke_dash_input = document.querySelector '#js-stroke-dasharray'
stroke_dash_value = document.querySelector '.stroke-dasharray__value'
stroke_offset_input = document.querySelector '#js-stroke-dashoffset'
stroke_offset_value = document.querySelector '.stroke-dashoffset__value'

length = path.getTotalLength()
length = length.toFixed()
path.style.strokeDasharray = length
path.style.strokeDashoffset = length

duration = 2
dash = length
offset = length

path_animation = ->
  path.style.transition = 'stroke-dashoffset ' + duration + 's ease-in-out'
  path.style.strokeDashoffset = 0

start_button.addEventListener 'click', path_animation, false

change_duration = (e) ->
  duration = e.target.value
  duration_value.innerHTML = duration + 's'

duration_input.addEventListener 'change', change_duration, false

reset_path = ->
  path.style.transition = null
  path.style.strokeDasharray = length
  path.style.strokeDashoffset = length

  duration_value = '2s'
  stroke_dash_input.value = length
  stroke_dash_value.innerHTML = length
  stroke_offset_input.value = length
  stroke_offset_value.innerHTML = length

reset_button.addEventListener 'click', reset_path, false

change_dash = (e) ->
  path.style.transition = null
  dash = e.target.value 
  stroke_dash_value.innerHTML = dash
  path.style.strokeDasharray = dash

stroke_dash_input.addEventListener 'change', change_dash, false

change_offset = (e) ->
  path.style.transition = null
  offset = e.target.value
  stroke_offset_value.innerHTML = offset
  path.style.strokeDashoffset = offset

stroke_offset_input.addEventListener 'change', change_offset, false
