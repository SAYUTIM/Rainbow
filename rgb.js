document.addEventListener("DOMContentLoaded", function() {
  var wrapper = document.querySelector(".wrapper");
  var animationSpeeds = [18, 14, 10, 6, 2];
  var currentSpeedIndex = 0;
  var clickCount = 0;
  var isFullscreen = false;

  wrapper.addEventListener("click", function() {
    if (!isFullscreen) {
      if (wrapper.requestFullscreen) {
        wrapper.requestFullscreen();
      } else if (wrapper.mozRequestFullScreen) {
        wrapper.mozRequestFullScreen();
      } else if (wrapper.webkitRequestFullscreen) {
        wrapper.webkitRequestFullscreen();
      } else if (wrapper.msRequestFullscreen) {
        wrapper.msRequestFullscreen();
      }
      isFullscreen = true;
    }

    clickCount++;
    if (clickCount > 6) {
      clickCount = 1;
    }

    currentSpeedIndex = (clickCount - 1) % 5;
    var animationSpeed = animationSpeeds[currentSpeedIndex];

    wrapper.style.animationDuration = animationSpeed + "s";
    wrapper.style.webkitAnimationDuration = animationSpeed + "s";
    wrapper.style.mozAnimationDuration = animationSpeed + "s";
    wrapper.style.oAnimationDuration = animationSpeed + "s";
  });
});
