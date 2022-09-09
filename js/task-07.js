const refInputSize = document.querySelector("#font-size-control");
const refText = document.querySelector("#text");

refInputSize.addEventListener("input", () => {
  refText.style.fontSize = refInputSize.value + "px";
  //   refText.style.color = "#" + refInputSize.value + "2";
});
