const boldBtn = document.querySelector(".boldBtn");
const italicBtn = document.querySelector(".italicBtn");
const underlineBtn = document.querySelector(".underlineBtn");
const linethroughBtn = document.querySelector(".lineThroughBtn");
const dText = document.getElementById("documentText");
const fText = document.getElementById("formatText");

function updateText() {
  fText.textContent = dText.value;
}
function makeBold(element) {
  element.classList.toggle("active");
  fText.classList.toggle("bold");
}
function makeItalic(element) {
  element.classList.toggle("active");
  fText.classList.toggle("italic");
}
function makeUnderline(element) {
  element.classList.toggle("active");
  fText.classList.toggle("underline");
}
function makeLineThrough(element) {
  element.classList.toggle("active");
  fText.classList.toggle("linethrough");
}
function makAlign(element, align) {
  fText.style.textAlign = align;
  const alignItems = document.getElementsByClassName("align");
  console.log(alignItems)
  for (let i = 0; i < alignItems.length; i++) {
    alignItems[i].classList.remove("active2");
  }
  element.classList.add("active2");
}
