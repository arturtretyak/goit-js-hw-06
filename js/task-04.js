let counterValue = 0;

const refDecrement = document.querySelector("[data-action=decrement]");
const refIncrement = document.querySelector("[data-action=increment]");
const refValue = document.querySelector("#value");

refDecrement.addEventListener("click", () => {
  counterValue -= 1;
  refValue.textContent = counterValue;
});

refIncrement.addEventListener("click", () => {
  counterValue += 1;
  refValue.textContent = counterValue;
});
