const ul = document.querySelector("ul");
const par = document.querySelectorAll("p");
ul.addEventListener("click", function (e) {
  const clicked = e.target.closest(".arrow");
  if (!clicked) return;
  console.log(clicked);
  par.forEach((p) => p.classList.add("hidden"));

  document
    .querySelector(`.par-${clicked.dataset.par}`)
    .classList.remove("hidden");
});
const arr1 = document.querySelector(".arr-1");
const arr2 = document.querySelector(".arr-2");
const arr3 = document.querySelector(".arr-3");
const arr4 = document.querySelector(".arr-4");
const arr5 = document.querySelector(".arr-5");
const arr = document.querySelectorAll(".arrow");
const par1 = document.querySelector(".par-1");
const par2 = document.querySelector(".par-2");
const par3 = document.querySelector(".par-3");
const par4 = document.querySelector(".par-4");
const par5 = document.querySelector(".par-5");

/*
arr1.addEventListener("click", function () {
  par1.classList.toggle("hidden");
  document.querySelector("li").classList.toggle("bold");
});
arr2.addEventListener("click", function () {
  par2.classList.toggle("hidden");
});
arr3.addEventListener("click", function () {
  par3.classList.toggle("hidden");
});
arr4.addEventListener("click", function () {
  par4.classList.toggle("hidden");
});
arr5.addEventListener("click", function () {
  par5.classList.toggle("hidden");
});
*/
