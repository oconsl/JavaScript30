const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  const panelOpen = document.querySelector(".open");
  if (panelOpen !== null) {
    if (panelOpen === this) {
      this.classList.toggle("open");
    } else {
      panelOpen.classList.toggle("open");
      this.classList.toggle("open");
    }
    return;
  }
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
