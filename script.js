Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });

  Shery.imageMasker("#me-img" , {
    mouseFollower: true,
    text: "Manoj",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet(".nav-item", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.textAnimate("#main-title, #subtitle",{
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

// JavaScript code to prevent horizontal overscrolling on touch devices
document.addEventListener('DOMContentLoaded', function() {
  var startX;
  var startY;

  document.addEventListener('touchstart', function(event) {
      startX = event.touches[0].pageX;
      startY = event.touches[0].pageY;
  });

  document.addEventListener('touchmove', function(event) {
      var deltaX = event.touches[0].pageX - startX;
      var deltaY = event.touches[0].pageY - startY;

      // Check if the horizontal swipe distance is greater than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
          event.preventDefault(); // Prevent horizontal overscrolling
      }
  });
});
