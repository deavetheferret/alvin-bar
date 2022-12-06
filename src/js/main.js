var buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  var underline = button.querySelector(".underline");

  button.addEventListener("mousemove", () => {
    underline.classList.add("underlining");
  });

  button.addEventListener("mouseleave", () => {
    underline.classList.remove("underlining");
  });
});

var triggers = document.querySelectorAll(".trigger");

triggers.forEach((trigger) => {
  var coverSquare = trigger.querySelector(".cover-square");

  trigger.addEventListener("mousemove", () => {
    coverSquare.classList.add("coverSquareOn");
  });

  trigger.addEventListener("mouseleave", () => {
    coverSquare.classList.remove("coverSquareOn");
  });
});

var triggersContact = document.querySelectorAll(".triggerContact");

triggersContact.forEach((triggerContact) => {
  var hoverBackground = triggerContact.querySelector(".hover-bg");

  triggerContact.addEventListener("mousemove", () => {
    hoverBackground.classList.add("active-hover-bg");
  });

  triggerContact.addEventListener("mouseleave", () => {
    hoverBackground.classList.remove("active-hover-bg");
  });
});

var menuTrigger = document.querySelector(".menu-trigger");
var menu = document.querySelector(".menu");
console.log(menuTrigger, menu);

menuTrigger.addEventListener("click", () => {
  menu.classList.toggle("menuOpen");
});

// 1
// testfunction = function () {
//   console.log("hello");
// };

// openMenu = function () {
//   menuTrigger.addEventListener("click", "testfunction");
// };

// // 2

// openMenu = function () {
//   menuTrigger.addEventListener("click", function () {
//     console.log("hello");
//   });
// };

// // 3

// openMenu = function () {
//   menuTrigger.addEventListener("click", () => {
//     console.log("hello");
//   });
// };
