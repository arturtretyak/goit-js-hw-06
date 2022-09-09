const refInput = document.querySelector("#name-input");
const refOutput = document.querySelector("#name-output");

refInput.addEventListener("input", () => {
  if (refInput.value === "") {
    refOutput.textContent = "Anonymous";
    return;
  }
  refOutput.textContent = refInput.value;
});
