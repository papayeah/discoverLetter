var video = document.getElementById('coverLetterFootage');
var pees  = document.querySelectorAll('.text-container p');
var feets = document.querySelectorAll('footer li');

// scroll function which enables video playback synchronously
window.addEventListener('scroll', function(e) {
  var wScroll     = window.pageYOffset;

  // video duration is 4.375
  video.currentTime = wScroll/100;
  console.log(wScroll);

  // fading in each paragraph
  pees.forEach((el, i) => {
    console.log(el.getBoundingClientRect().bottom, wScroll);
    if(el.getBoundingClientRect().bottom < wScroll + 500) {
      el.style.opacity = '1';
    } else {
      el.style.opacity = '0';
    }
  });

  // fading in footer
  feets.forEach((el, i) => {
    console.log(el.getBoundingClientRect().bottom, wScroll);
    if(el.getBoundingClientRect().bottom < wScroll + 300) {
      el.style.opacity = '1';
    } else {
      el.style.opacity = '0';
    }
  })
});
