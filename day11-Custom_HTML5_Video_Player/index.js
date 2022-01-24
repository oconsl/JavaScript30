const play = document.querySelector(".toggle");
const toggle = document.querySelector(".toggle");
const volume = document.querySelector("#volume");
const speed = document.querySelector("#speed");
const rewind = document.querySelector(".rewind10");
const forward = document.querySelector(".forward25");
const progress = document.querySelector(".progress__filled");
const video = document.querySelector("video");

function scrub(event) {
  video.currentTime =
    (event.offsetX / progress.parentNode.offsetWidth) * video.duration;
}

play.addEventListener("click", () => {
  video.paused ? video.play() : video.pause();
});

volume.addEventListener("change", () => (video.volume = volume.value));
volume.addEventListener("mousemove", () => (video.volume = volume.value));

speed.addEventListener("change", () => (video.playbackRate = speed.value));
speed.addEventListener("mousemove", () => (video.playbackRate = speed.value));

rewind.addEventListener("click", () => {
  video.currentTime += parseFloat(rewind.dataset.skip);
});
forward.addEventListener("click", () => {
  video.currentTime += parseFloat(forward.dataset.skip);
});

video.addEventListener("click", () => {
  video.paused ? video.play() : video.pause();
});
video.addEventListener("play", () => {
  toggle.textContent = this.paused ? "▶" : "❚ ❚";
});
video.addEventListener("pause", () => {
  toggle.textContent = !this.paused ? "▶" : "❚ ❚";
});
video.addEventListener("timeupdate", () => {
  progress.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    video.paused ? video.play() : video.pause();
  }
});

progress.parentNode.addEventListener("click", scrub);
progress.addEventListener("mousemove", (event) => {
  drag && scrub(event);
});
progress.parentNode.addEventListener("mousedown", () => {
  drag = true;
});
progress.parentNode.addEventListener("mouseup", () => {
  drag = false;
});

let drag = false;
progress.style.flexBasis = "0%";
