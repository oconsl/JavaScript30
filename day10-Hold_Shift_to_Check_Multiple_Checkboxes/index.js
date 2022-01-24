const checkboxes = document.querySelectorAll("input");
const button = document.querySelector("button");

const items = [];

checkboxes.forEach((box) => {
  items.push(box);

  box.addEventListener("click", (event) => {
    if (event.shiftKey) {
      const checked = items.filter((check) => check.checked);
      const firstIndex = items.indexOf(checked[0]);
      const secondIndex = items.indexOf(checked[checked.length - 1]);

      items.map((item, index) => {
        if (index > firstIndex && index < secondIndex) item.checked = true;
      });
    }
  });
});

button.addEventListener("click", () => {
  checkboxes.forEach((box) => (box.checked = false));
});
