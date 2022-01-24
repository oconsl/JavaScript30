window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (audio === null) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  key.addEventListener("transitionend", (e) => {
    key.classList.remove("playing");
  });
});
