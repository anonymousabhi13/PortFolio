gsap.from("#mern", {
  x: 80,
  duration: 1,
  transform: "scaleX(1.12) scaleY(0.70)",
  opacity: 0,
  ease: "bounce.out",
  stagger: 0.05,
});

gsap.from("#ui", {
  x: 80,
  duration: 2,
  opacity: 0,
  ease: "bounce.out",
  delay: 1,
});
gsap.from("#fd", {
  x: 60,
  duration: 2,
  opacity: 0,
  ease: "bounce.out",
  delay: 1,
});
gsap.from("#bd", {
  x: 40,
  duration: 2,
  opacity: 0,
  ease: "bounce.out",
  stagger: 0.05,
  delay: 1,
});
gsap.from("#de", {
  x: 30,
  duration: 3,
  opacity: 0,
  ease: "bounce.out",
  delay: 1,
});
gsap.from("#dev", {
  x: 30,
  duration: 3,
  opacity: 0,
  ease: "bounce.out",
  delay: 1,
  // onComplete: function () {
  // gsap.to("#image", {
  //   scrollTrigger: {
  //     trigger: " #image ",
  //     markers: true,
  //     start: "50% 20%",

  //   },
  //   opacity: .5,
  //   y: -100,
  //   stagger: 0.3,
  //   duration: 2,
  //  onComplete: function () {
  //   // $('.mid .workSection').textillate('mid')
  //  }
  // });
  //  }
});

gsap.to(".askill", {
  scrollTrigger: {
    trigger: ".askill",
    scroller: ".askill",
    scrub: true,
    markers:true
  },
  delay:2,
  duration: 0.8,
});

//   const bouncy = document.querySelectorAll('.a');

// bouncy.forEach(function (elem) {
//   elem.addEventListener("mouseover",
//     function () {
//       this.classList.add("bouncing");
//       this.addEventListener("animationend", function () {
//         this.classList.remove("bouncing");
//       });
//     });
// })

window.addEventListener("mousemove", function (dets) {
  let y = dets.pageY;
  let x = dets.pageX;

  setTimeout(function () {
    document.querySelector(".circle").style.top = y + "px";
    document.querySelector(".circle").style.left = x + "px";
  }, 100);
});

// $('.mid .workSection').textillate({
//   autoStart:false,
//   in:{
//     effect: 'fa',
//     delay: 10,
//   },

//   });

// gsap.to(".mid", {
//   scrollTrigger: {
//     trigger: " .workSection ",
//     markers: true,
//     start: "50% 20%",
//   toggleActions: "play pause resume reverse ",

//   },
//   opacity: 0,
//   y: -100,
//   stagger: 0.3,
//   duration: 2,
//  onComplete: function () {
//   $('.para p').textillate('start')
//  }
// });

// let number = document.querySelector("#number");
// let counter = 0;
// setInterval(() => {
//   if (counter < 65) {
//     counter += 1;
//     number.innerHTML = counter + "%";
//   }
// }, 30);
// let number1 = document.querySelector("#number1");
// let counter1 = 0;
// setInterval(() => {
//   if (counter1 < 65) {
//     counter1 += 1;
//     number1.innerHTML = counter1 + "%";
//   }
// }, 30);
// let number2 = document.querySelector("#number2");
// let counter2 = 0;
// setInterval(() => {
//   if (counter < 65) {
//     counter2 += 1;
//     number2.innerHTML = counter2 + "%";
//   }
// }, 30);
