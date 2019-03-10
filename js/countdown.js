(function() {
  var end = new Date('2019-10-25T08:00:00Z')
  Countdown.timer(end, function(time) {
    document.getElementById('days').textContent = time.days
    document.getElementById('hours').textContent = time.hours
    document.getElementById('minutes').textContent = time.minutes
    document.getElementById('seconds').textContent = time.seconds
  },function() {
    document.getElementById('seconds').textContent = '0'
    document.getElementById('countdown-end').setAttribute('style', 'display: block;')
  })
})()