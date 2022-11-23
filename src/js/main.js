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
