function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refButtonChangerColor = document.querySelector(".change-color");
const refColor = document.querySelector(".color");
const refBody = document.querySelector("body");

refButtonChangerColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  refColor.textContent = randomColor;
  refBody.style.backgroundColor = randomColor;
});
