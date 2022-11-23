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

var figures = document.querySelectorAll(".trigger");

figures.forEach((trigger) => {
  var figcaption = trigger.querySelector(".cover-square");

  figure.addEventListener("mousemove", () => {
    figcaption.classList.add("figcaption-hover");
  });

  figure.addEventListener("mouseleave", () => {
    figcaption.classList.remove("figcaption-hover");
  });
});
