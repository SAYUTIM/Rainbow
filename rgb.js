document.addEventListener("DOMContentLoaded", function() {
  var wrapper = document.querySelector(".wrapper");
  var animationSpeeds = [18, 14, 10, 6, 2]; // 各速度に対応するアニメーション時間
  var currentSpeedIndex = 0;
  var clickCount = 0;
  var isFullscreen = false; // 全画面モードのフラグ

  wrapper.addEventListener("click", function() {
    if (!isFullscreen) {
      if (wrapper.requestFullscreen) {
        wrapper.requestFullscreen();
      } else if (wrapper.mozRequestFullScreen) { // Firefox対応
        wrapper.mozRequestFullScreen();
      } else if (wrapper.webkitRequestFullscreen) { // Chrome, Safari, Opera対応
        wrapper.webkitRequestFullscreen();
      } else if (wrapper.msRequestFullscreen) { // IE/Edge対応
        wrapper.msRequestFullscreen();
      }

      isFullscreen = true;
    }

    clickCount++;
    if (clickCount > 6) {
      clickCount = 1; // クリック回数が6回を超えた場合、最初の速度に戻る
    }

    currentSpeedIndex = (clickCount - 1) % 5;
    var animationSpeed = animationSpeeds[currentSpeedIndex];

    wrapper.style.animationDuration = animationSpeed + "s";
    wrapper.style.webkitAnimationDuration = animationSpeed + "s";
    wrapper.style.mozAnimationDuration = animationSpeed + "s";
    wrapper.style.oAnimationDuration = animationSpeed + "s";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var wrapper = document.querySelector(".wrapper");
  var animationSpeeds = [18, 14, 10, 6, 2]; // 各速度に対応するアニメーション時間
  var currentSpeedIndex = 0;
  var clickCount = 0;
  var isFullscreen = false; // 全画面モードのフラグ

  wrapper.addEventListener("click", function() {
    if (!isFullscreen) {
      if (wrapper.requestFullscreen) {
        wrapper.requestFullscreen();
      } else if (wrapper.mozRequestFullScreen) { // Firefox対応
        wrapper.mozRequestFullScreen();
      } else if (wrapper.webkitRequestFullscreen) { // Chrome, Safari, Opera対応
        wrapper.webkitRequestFullscreen();
      } else if (wrapper.msRequestFullscreen) { // IE/Edge対応
        wrapper.msRequestFullscreen();
      }

      isFullscreen = true;
    }

    clickCount++;
    if (clickCount > 6) {
      clickCount = 1; // クリック回数が6回を超えた場合、最初の速度に戻る
    }

    currentSpeedIndex = (clickCount - 1) % 5;
    var animationSpeed = animationSpeeds[currentSpeedIndex];

    wrapper.style.animationDuration = animationSpeed + "s";
    wrapper.style.webkitAnimationDuration = animationSpeed + "s";
    wrapper.style.mozAnimationDuration = animationSpeed + "s";
    wrapper.style.oAnimationDuration = animationSpeed + "s";
  });
});
