const pressed = [];
const secretCode = "oconsl";

window.addEventListener("keyup", (event) => {
  pressed.push(event.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join("") === secretCode) {
    cornify_add();
    document.querySelector("body").style.background = "black";
  }
});
