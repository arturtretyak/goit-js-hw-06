function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refBoxes = document.querySelector("#boxes");
const refInput = document.querySelector("input");
const refCreateBtn = document.querySelector("button[data-create]");
const refDestroyBtn = document.querySelector("button[data-destroy]");

function createBoxes(amount) {
  let size = 30;
  let newBoxes = "";
  for (let i = 0; i < amount; i++) {
    let randomColor = getRandomHexColor();
    if (randomColor.length < 7) {
      randomColor += "a";
    }
    newBoxes = `${newBoxes}<div style="width: ${size}px;
     height: ${size}px; background-color: ${randomColor}"></div>`;
    size += 10;
  }
  return newBoxes;
}

refCreateBtn.addEventListener("click", () => {
  refBoxes.insertAdjacentHTML("beforeend", createBoxes(refInput.value));
});

refDestroyBtn.addEventListener("click", () => {
  refBoxes.innerHTML = "";
});
