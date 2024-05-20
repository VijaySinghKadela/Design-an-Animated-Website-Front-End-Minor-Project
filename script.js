const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let videocon = document.querySelector("#video-cantainer");
let playbtn = document.querySelector("#play");

function videoconAnimation() {
  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      opacity: 1,
      scale: 1,
    });
  });

  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      opacity: 0,
      scale: 0,
    });
  });

  videocon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      top: dets.y,
      left: dets.x,
    });
  });
}
videoconAnimation();

function loadingAnimation() {
  let mainHeadline = document.querySelector("#page1 h1");

  gsap.from(mainHeadline, {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });

  gsap.from(videocon, {
    sclae: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
}
loadingAnimation();

let body = document.querySelector("body");

body.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    left: dets.x,
    top: dets.y,
  });
});

let allChild = document.querySelectorAll(".child");

allChild.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });
});


