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
