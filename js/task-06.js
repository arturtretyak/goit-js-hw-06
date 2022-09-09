"use strict";
const refInput = document.querySelector("#validation-input");
const refDataLength = Number(refInput.getAttribute("data-length"));

refInput.addEventListener("blur", () => {
  if (refInput.value.length === refDataLength) {
    refInput.classList.remove("invalid");
    refInput.classList.add("valid");
    return;
  } else {
    refInput.classList.remove("valid");
    refInput.classList.add("invalid");
  }
});
