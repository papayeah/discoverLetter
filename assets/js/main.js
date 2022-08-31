var video       = document.getElementById('coverLetterFootage');

window.addEventListener('scroll', function(e) {
  var wScroll     = window.pageYOffset;
  // var vTime = video.currentTime;

  // video duration is 4.375
  video.currentTime = wScroll/200;
  
});
