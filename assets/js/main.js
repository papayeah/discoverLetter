var video = document.getElementById('coverLetterFootage');

// scroll function which enables video playback synchronously
window.addEventListener('scroll', function(e) {
  var wScroll     = window.pageYOffset;

  // video duration is 4.375
  video.currentTime = wScroll/100;

  // at the end of the video, fade in the remaining text
  // if(wScroll == 1000) {
  //
  // }
  console.log(wScroll);
});
